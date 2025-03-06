import { Frame } from "../entities/frame.entity";

export interface IFrameRepository {
  buscarPorDemo(demoId: string): Promise<Frame[]>;
}