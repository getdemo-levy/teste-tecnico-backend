import { Frame } from "src/shared/domain/entities/frame.entity";
import { FrameModel } from "../database/models/frame.model";
import { DemoMapper } from "./demo.mapper";
import { Demo } from "src/shared/domain/entities/demo.entity";
import { DemoModel } from "../database/models/demo.model";

export class FrameMapper {
  static toDomain(model: FrameModel): Frame {
    return new Frame(
      model.id,
      model.get('demoId'),
      model.get('html'),
      model.get('order'),
      model.get('demo'),
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