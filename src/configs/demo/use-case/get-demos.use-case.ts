import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IDemoRepository } from "src/shared/domain/adapters/demo.repository.adapter";
import { Demo } from "src/shared/domain/entities/demo.entity";
import { Response } from "src/shared/domain/entities/response";

@Injectable()
export class GetDemosUseCase {
  constructor(
    @Inject('IDemoRepository')
    private readonly demoRepository: IDemoRepository,
  ) {}
  async execute(): Promise<Response<Demo[]>> {
    const demos = await this.demoRepository.buscarTodos()
    const data = demos?.map((demo) => {
      return {
        id: demo.id,
        name: demo.name
      }
    })
    if (demos) {
      return {
        message: "Demos encontradas com sucesso!",
        statusCode: HttpStatus.OK,
        data,
      }
    } else {
      return {
        message: "Nenhuma demo foi encontrada na base de data.",
        statusCode: HttpStatus.NO_CONTENT,
      }
    }
  }
}