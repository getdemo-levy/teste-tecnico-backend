import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IFrameRepository } from "src/shared/domain/adapters/frame.repository.adapter";
import { Frame } from "src/shared/domain/entities/frame.entity";
import { GetDemoParam } from "src/shared/domain/entities/get-demo-param";
import { Response } from "src/shared/domain/entities/response";

@Injectable()
export class GetDemoFramesUseCase {
  constructor(
    @Inject('IFrameRepository')
    private readonly frameRepository: IFrameRepository,
  ) {}
  async execute(getDemoParam: GetDemoParam): Promise<Response<Partial<Frame>[]>> {
    const frames = await this.frameRepository.findByDemo(getDemoParam.id_demo);
    const data = frames?.map((frame) => {
      return {
        id: frame.id,
        order: frame.order,
        id_demo: frame.demoId,
        html: frame.html,
    }
    })
    if (frames) {
      return {
        message: "Frames encontrados com sucesso!",
        statusCode: HttpStatus.OK,
        data,
      }
    } else {
      return {
        message: `Nenhuma frame foi encontrada na base de data para o demo passado. ID: ${getDemoParam.id_demo}`,
        statusCode: HttpStatus.NO_CONTENT,
      }
    }
  }
}