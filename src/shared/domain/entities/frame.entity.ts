import { Demo } from "./demo.entity";

export class Frame {
  constructor(
    public id: string,
    public demoId: string,
    public html: string,
    public order: number,
    public demo?: Demo,
  ) { }
}