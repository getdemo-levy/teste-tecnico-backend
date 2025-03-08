import { UpdateFrameDto } from "src/configs/demo/interface/dtos/update-frame.dto";
import { UpdatedHtmlDto } from "src/configs/demo/interface/dtos/updated-html.dto";

export class UpdateFrameParam {
  id_demo: string;
  html: string;
  constructor(props: UpdateFrameParam) {
    Object.assign(this, props);
  }
  static fromDto(
    dto: UpdateFrameDto,
    body: UpdatedHtmlDto,
  ): UpdateFrameParam {
    return new UpdateFrameParam({ ...dto, ...body });
  }
}