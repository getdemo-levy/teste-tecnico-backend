import { UpdateFrameDto } from "src/configs/demo/interface/dtos/update-frame.dto";

export class UpdateFrameParam {
  id_demo: string;
  constructor(props: UpdateFrameParam) {
    Object.assign(this, props);
  }
  static fromDto(
    dto: UpdateFrameDto,
  ): UpdateFrameParam {
    return new UpdateFrameParam({ ...dto });
  }
}