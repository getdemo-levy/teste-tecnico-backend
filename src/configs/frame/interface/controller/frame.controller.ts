import { Body, Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Response } from 'src/shared/domain/entities/response';
import { GetDemoFramesUseCase } from '../../use-case/get-demo-frames.use-case';
import { GetDemoByIdDto } from 'src/configs/demo/interface/dtos/get-demo-by-id.dto';
import { GetDemoParam } from 'src/shared/domain/entities/get-demo-param';
import { UpdateFrameDto } from 'src/configs/demo/interface/dtos/update-frame.dto';
import { UpdateFrameParam } from 'src/shared/domain/entities/update-frame-param';
import { UpdatedHtmlDto } from 'src/configs/demo/interface/dtos/updated-html.dto';
import { UpdateFrameUseCase } from '../../use-case/update-frame.use-case';

@Controller('api/demos/:id_demo/frames')
export class FrameController {
  constructor(
      private readonly logger: PinoLogger,
      private readonly getDemoFramesUseCase: GetDemoFramesUseCase,
      private readonly updateFrameUseCase: UpdateFrameUseCase,
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
        message: 'Erro ao receber lista de Frames de Demo',
        statusCode: error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
        error
      }
    }
  }

  @Put('/:id_frame')
  async updateFrame(@Param() params: UpdateFrameDto, @Body() body: UpdatedHtmlDto): Promise<Response<any>> {
    this.logger.info({
      message: 'FrameController.updateFrame START'
    })
    try {
      const getDemoParam = UpdateFrameParam.fromDto(params, body);
      const demos = await this.updateFrameUseCase.execute(getDemoParam);
      this.logger.info({
        message: 'FrameController.updateFrame END',
        demos
      })
      return demos;
    } catch (error) {
      this.logger.error({
        message: 'FrameController.updateFrame ERROR',
        error
      })
      return {
        message: 'Erro ao atualizar frame',
        statusCode: error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
        error
      }
    }
  }
}
