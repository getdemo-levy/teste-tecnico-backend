import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { IFrameRepository } from "src/shared/domain/adapters/frame.repository.adapter";
import { Frame } from "src/shared/domain/entities/frame.entity";
import { Response } from "src/shared/domain/entities/response";
import { UpdateFrameParam } from "src/shared/domain/entities/update-frame-param";

@Injectable()
export class UpdateFrameUseCase { 
  constructor(
    private readonly logger: PinoLogger,
    @Inject('IFrameRepository')
    private readonly frameRepository: IFrameRepository,
  ) {}
  async execute(data: UpdateFrameParam): Promise<Response<Partial<Frame | null>>> {
    this.logger.info({
      message: 'UpdateFrameUseCase.execute START',
      data
    })
    const updatedFrame = await this.frameRepository.update(data.id_frame, { html: data.html });
    this.logger.info({
      message: 'UpdateFrameUseCase.execute END',
      updatedFrame,
    })
    return {
      message: updatedFrame ? 'Frame atualizado com sucesso!' : 'Nenhum frame foi atualizado',
      statusCode: updatedFrame ? HttpStatus.OK : HttpStatus.NOT_MODIFIED,
    }
  }
}