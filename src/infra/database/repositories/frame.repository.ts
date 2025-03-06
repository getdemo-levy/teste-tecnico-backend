import { Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { FrameMapper } from "src/infra/mappers/frame.mapper";
import { IFrameRepository } from "src/shared/domain/adapters/frame.repository.adapter";
import { Frame } from "src/shared/domain/entities/frame.entity";
import { FrameModel } from "../models/frame.model";

@Injectable()
export class FrameRepository implements IFrameRepository {
  constructor(private readonly logger: PinoLogger) { }

  async buscarPorDemo(demoId: string): Promise<Frame[]> {
    this.logger.info({ msg: 'FrameRepository.buscarPorDemo INÍCIO', demoId });

    const results = await FrameModel.findAll({ where: { demoId } });

    this.logger.info({ msg: 'FrameRepository.buscarPorDemo FIM', results });

    return results.map(FrameMapper.toDomain);
  }
}