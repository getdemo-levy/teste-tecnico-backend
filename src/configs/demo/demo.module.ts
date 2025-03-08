import { Module } from "@nestjs/common";
import { DemoController } from "src/configs/demo/interface/controller/demo.controller";
import { GetDemoByIdUseCase } from "src/configs/demo/use-case/get-demo-by-id.use-case";
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
    GetDemosUseCase,
    GetDemoByIdUseCase,
  ],
  exports: [],
})
export class DemoModule { }