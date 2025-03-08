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
    this.logger.info({ msg: 'FrameRepository.findByDemo INÍCIO', demoId });

    const results = await FrameModel.findAll({ where: { demoId } });

    this.logger.info({ msg: 'FrameRepository.findByDemo FIM', results });

    return results.map(FrameMapper.toDomain);
  }

  async update(id: string, data: Partial<Frame>): Promise<Frame | null> {
    this.logger.info({
      msg: 'FrameRepository.update FIM',
      id,
    });

    const [updatedRows, updatedModels] = await FrameModel.update(
      data,
      {
        where: { id },
        returning: true,
      },
    );

    if (updatedRows === 0) return null;

    this.logger.info({
      msg: 'FrameRepository.update FIM',
    });
    return updatedModels.length > 0
      ? FrameMapper.toDomain(updatedModels[0])
      : null;
  }
}