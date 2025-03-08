import { Transform } from "class-transformer";
import { GetDemoByIdDto } from "./get-demo-by-id.dto";
import { IsUUID, IsNotEmpty } from 'class-validator';

export class UpdateFrameDto extends GetDemoByIdDto {
  @Transform(({ value }) => String(value))
  @IsUUID()
  @IsNotEmpty()
  id_frame: string;
}
