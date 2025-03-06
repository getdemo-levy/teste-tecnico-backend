import { Module } from "@nestjs/common";
import { DemoController } from "src/configs/demo/demo.controller";

@Module({
  imports: [],
  controllers: [DemoController],
  providers: [],
  exports: [],
})
export class DemoModule { }