import { Frame } from "src/shared/domain/entities/frame.entity";
import { FrameModel } from "../database/models/frame.model";
import { DemoMapper } from "./demo.mapper";

export class FrameMapper {
  static toDomain(model: FrameModel): Frame {
    return new Frame(
      model.id,
      model.demoId,
      model.html,
      model.order,
      model.demo ? DemoMapper.toDomain(model.demo) : undefined,
    );
  }

  static toPersistence(entity: Frame): FrameModel {
    const model = new FrameModel();
    model.id = entity.id;
    model.demoId = entity.demoId;
    model.html = entity.html;
    model.order = entity.order;
    return model;
  }
}