import { Table, Model, PrimaryKey, Default, DataType, Column, HasMany } from "sequelize-typescript";
import { FrameModel } from "./frame.model";

@Table({
  tableName: 'Demo',
})
export class DemoModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false, field: 'id' })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false, field: 'name' })
  name: string;

  @HasMany(() => FrameModel, { as: 'frames', foreignKey: 'demoId' })
  frames: FrameModel[];
}
