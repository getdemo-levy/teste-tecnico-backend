import { IsUUID, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetDemoByIdDto {
  @Transform(({ value }) => String(value))
  @IsUUID()
  @IsNotEmpty()
  id_demo: string;
}
