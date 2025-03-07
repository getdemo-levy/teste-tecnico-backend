import { GetDemoByIdDto } from "src/configs/demo/interface/dtos/get-demo-by-id.dto";

export class GetDemoParam {
  id_demo: string;
  constructor(props: GetDemoParam) {
    Object.assign(this, props);
  }
  static fromDto(
    dto: GetDemoByIdDto,
  ): GetDemoParam {
    return new GetDemoParam({ ...dto });
  }
}