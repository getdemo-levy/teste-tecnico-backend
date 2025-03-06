import { Injectable } from "@nestjs/common";
import { IDemoRepository } from "src/shared/domain/adapters/demo.repository.adapter";
import { Demo } from "src/shared/domain/entities/demo.entity";
import { DemoModel } from "../models/demo.model";
import { FrameModel } from "../models/frame.model";
import { PinoLogger } from "nestjs-pino";
import { DemoMapper } from "src/infra/mappers/demo.mapper";

@Injectable()
export class DemoRepository implements IDemoRepository {
  constructor(private readonly logger: PinoLogger) { }

  async buscarPorId(id: string): Promise<Demo | null> {
    this.logger.info({ msg: 'DemoRepository.buscarPorId INÍCIO', id });

    const result = await DemoModel.findByPk(id, {
      include: [{ model: FrameModel, as: 'frames' }],
    });

    this.logger.info({ msg: 'DemoRepository.buscarPorId FIM', result });

    return result ? DemoMapper.toDomain(result) : null;
  }

  async buscarTodos(): Promise<Demo[]> {
    this.logger.info({ msg: 'DemoRepository.buscarTodos INÍCIO' });

    const results = await DemoModel.findAll({
      include: [{ model: FrameModel, as: 'frames' }],
    });

    this.logger.info({ msg: 'DemoRepository.buscarTodos FIM', results });

    return results.map(DemoMapper.toDomain);
  }
}