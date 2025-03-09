import { Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { FrameMapper } from "src/infra/mappers/frame.mapper";
import { IFrameRepository } from "src/shared/domain/adapters/frame.repository.adapter";
import { Frame } from "src/shared/domain/entities/frame.entity";
import { FrameModel } from "../models/frame.model";

@Injectable()
export class FrameRepository implements IFrameRepository {
  constructor(private readonly logger: PinoLogger) { }

  async findByDemo(demoId: string): Promise<Frame[]> {
    this.logger.info({ msg: 'FrameRepository.findByDemo START', demoId });

    const results = await FrameModel.findAll({ where: { demoId } });

    this.logger.info({ msg: 'FrameRepository.findByDemo END', results });

    return results.map(FrameMapper.toDomain);
  }

  async update(id: string, data: Partial<Frame>): Promise<boolean | null> {
    this.logger.info({
      msg: 'FrameRepository.update START',
      id,
      data,
    });

    const [updatedRows, updatedModels] = await FrameModel.update(
      data,
      {
        where: { id },
        returning: true,
        logging: true,
      },
    );

    if (updatedRows === 0) return null;
    this.logger.info({
      msg: 'FrameRepository.update END',
    });
    return true
  }
}