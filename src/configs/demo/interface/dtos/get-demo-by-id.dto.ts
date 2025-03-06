import { IsUUID, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetDemoBtIdDto {
  @Transform(({ value }) => String(value))
  @IsUUID()
  @IsNotEmpty()
  id_demo: string;
}
