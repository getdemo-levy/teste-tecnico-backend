import { Frame } from "../entities/frame.entity";

export interface IFrameRepository {
  findByDemo(demoId: string): Promise<Frame[]>;
  update(id: string, data: Partial<Frame>): Promise<Frame | null>;
}