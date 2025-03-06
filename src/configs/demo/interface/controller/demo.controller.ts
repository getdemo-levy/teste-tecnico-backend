import { Controller, Get, HttpStatus } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { GetDemosUseCase } from '../../use-case/get-demos.use-case';
import { Response } from 'src/shared/domain/entities/response';

@Controller('demos')
export class DemoController {
  constructor(
    private readonly logger: PinoLogger,
    private readonly getDemosUseCase: GetDemosUseCase,
  ) { }
  @Get('demos/:id_demo')
  getDemo(): { status: string } {
    return { status: 'ok' };
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
