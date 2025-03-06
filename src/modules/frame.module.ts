import { Module } from "@nestjs/common";
import { FrameController } from "src/configs/frame/interface/controller/frame.controller";

@Module({
  imports: [],
  controllers: [FrameController],
  providers: [],
  exports: [],
})
export class FrameModule { }