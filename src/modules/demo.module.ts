import { Module } from "@nestjs/common";
import { DemoController } from "src/configs/demo/interface/controller/demo.controller";
import { GetDemosUseCase } from "src/configs/demo/use-case/get-demos.use-case";
import { DemoRepository } from "src/infra/database/repositories/demo.repository";

@Module({
  imports: [],
  controllers: [DemoController],
  providers: [
    {
      provide: 'IDemoRepository',
      useClass: DemoRepository,
    },
    GetDemosUseCase
  ],
  exports: [],
})
export class DemoModule { }