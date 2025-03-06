import { Demo } from "../entities/demo.entity";

export interface IDemoRepository {
  buscarPorId(id: string): Promise<Demo | null>;
  buscarTodos(): Promise<Demo[]>;
}
