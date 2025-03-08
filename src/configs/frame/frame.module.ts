import { Module } from "@nestjs/common";
import { FrameController } from "src/configs/frame/interface/controller/frame.controller";
import { GetDemoFramesUseCase } from "src/configs/frame/use-case/get-demo-frames.use-case";
import { FrameRepository } from "src/infra/database/repositories/frame.repository";
import { UpdateFrameUseCase } from "./use-case/update-frame.use-case";

@Module({
  imports: [],
  controllers: [FrameController],
  providers: [
    {
      provide: 'IFrameRepository',
      useClass: FrameRepository,
    },
    GetDemoFramesUseCase,
    UpdateFrameUseCase,
  ],
  exports: [],
})
export class FrameModule { }