import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Response } from 'src/shared/domain/entities/response';
import { GetDemoFramesUseCase } from '../../use-case/get-demo-frames.use-case';
import { GetDemoByIdDto } from 'src/configs/demo/interface/dtos/get-demo-by-id.dto';
import { GetDemoParam } from 'src/shared/domain/entities/get-demo-param';

@Controller('demos/:id_demo/frames')
export class FrameController {
  constructor(
      private readonly logger: PinoLogger,
      private readonly getDemoFramesUseCase: GetDemoFramesUseCase,
    ) { }
  @Get('')
  async getDemoFrames(@Param() params: GetDemoByIdDto): Promise<Response<any>> {
    this.logger.info({
      message: 'FrameController.getFrames START'
    })
    try {
      const getDemoParam = GetDemoParam.fromDto(params);
      const demos = await this.getDemoFramesUseCase.execute(getDemoParam);
      this.logger.info({
        message: 'FrameController.getFrames END',
        demos
      })
      return demos;
    } catch (error) {
      this.logger.error({
        message: 'FrameController.getFrames ERROR',
        error
      })  
      return {
        message: 'Erro ao receber lista de Demos',
        statusCode: error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
        error
      }
    }
  }
}
