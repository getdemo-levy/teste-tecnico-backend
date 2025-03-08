import { Inject, Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { IFrameRepository } from "src/shared/domain/adapters/frame.repository.adapter";
import { UpdateFrameParam } from "src/shared/domain/entities/update-frame-param";

@Injectable()
export class UpdateFrameUseCase { 
  constructor(
    private readonly logger: PinoLogger,
    @Inject('IFrameRepository')
    private readonly frameRepository: IFrameRepository,
  ) {}
  async execute(data: UpdateFrameParam) {
    this.logger.info({
      message: 'UpdateFrameUseCase.execute START',
      data
    })
    const updatedFrame = await this.frameRepository.update()
    this.logger.info({
      message: 'UpdateFrameUseCase.execute END',
    })
  }
}