import { IsNotEmpty, IsString } from "class-validator";

export class UpdatedHtmlDto {
  @IsString()
  @IsNotEmpty()
  html: string;
}
