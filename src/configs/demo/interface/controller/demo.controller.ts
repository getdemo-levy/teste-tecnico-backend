import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { GetDemosUseCase } from '../../use-case/get-demos.use-case';
import { Response } from 'src/shared/domain/entities/response';
import { GetDemoByIdDto } from '../dtos/get-demo-by-id.dto';
import { GetDemoParam } from 'src/shared/domain/entities/get-demo-param';
import { GetDemoByIdUseCase } from '../../use-case/get-demo-by-id.use-case';

@Controller('demos')
export class DemoController {
  constructor(
    private readonly logger: PinoLogger,
    private readonly getDemosUseCase: GetDemosUseCase,
    private readonly getDemoByIdUseCase: GetDemoByIdUseCase,
  ) { }
  @Get('/:id_demo')
  async getDemo(@Param() params: GetDemoByIdDto): Promise<Response<any>> {
    this.logger.info({
      message: 'DemoController.getDemo START'
    })
    try {
      const getDemoParam = GetDemoParam.fromDto(params);
      const demo = await this.getDemoByIdUseCase.execute(getDemoParam);
      this.logger.info({
        message: 'DemoController.getDemo END',
        demo
      })
      return demo;
    } catch (error) {
      this.logger.error({
        message: 'DemoController.getDemo ERROR',
        error
      })
      return {
        message: `Erro ao receber demo de id: ${params.id_demo}`,
        statusCode: error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR,
        error
      }
    }
  }

  @Get('')
  async getDemos(): Promise<Response<any>> {
    this.logger.info({
      message: 'DemoController.getDemos START'
    })
    try {
      const demos = await this.getDemosUseCase.execute()
      this.logger.info({
        message: 'DemoController.getDemos END',
        demos
      })
      return demos;
    } catch (error) {
      this.logger.error({
        message: 'DemoController.getDemos ERROR',
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
