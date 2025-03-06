import { Demo } from "src/shared/domain/entities/demo.entity";
import { DemoModel } from "../database/models/demo.model";
import { FrameMapper } from "./frame.mapper";

export class DemoMapper {
  static toDomain(model: DemoModel): Demo {
    return new Demo(
      model.id,
      model.get('name'),
      model.get('frames')?.map((frame: any) => FrameMapper.toDomain(frame)),
    );
  }

  static toPersistence(entity: Demo): DemoModel {
    const model = new DemoModel();
    model.id = entity.id;
    model.name = entity.name;
    return model;
  }
}
