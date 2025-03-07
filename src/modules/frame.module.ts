import { Module } from "@nestjs/common";
import { FrameController } from "src/configs/frame/interface/controller/frame.controller";
import { GetDemoFramesUseCase } from "src/configs/frame/use-case/get-demo-frames.use-case";
import { FrameRepository } from "src/infra/database/repositories/frame.repository";

@Module({
  imports: [],
  controllers: [FrameController],
  providers: [
    {
      provide: 'IFrameRepository',
      useClass: FrameRepository,
    },
    GetDemoFramesUseCase,
  ],
  exports: [],
})
export class FrameModule { }