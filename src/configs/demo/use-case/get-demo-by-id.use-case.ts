import { HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IDemoRepository } from "src/shared/domain/adapters/demo.repository.adapter";
import { GetDemoParam } from "src/shared/domain/entities/get-demo-param";

@Injectable()
export class GetDemoByIdUseCase {
  constructor(
    @Inject('IDemoRepository')
    private readonly demoRepository: IDemoRepository,
  ) {}
  async execute(getDemoParam: GetDemoParam) {
    const demo = await this.demoRepository.buscarPorId(getDemoParam.id_demo)
    if (demo) {
      return {
        message: "Demo encontrado com sucesso!",
        statusCode: HttpStatus.OK,
        dados: {
          id: demo.id,
          name: demo.name,
        },
      }
    } else {
      return {
        message: "Nenhuma demo foi encontrada na base de dados.",
        statusCode: HttpStatus.NO_CONTENT,
      }
    }
  }
}