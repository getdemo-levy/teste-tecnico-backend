import { Frame } from "./frame.entity";

export class Demo {
  constructor(
    public id: string,
    public name: string,
    public frames?: Frame[],
  ) { }
}