import { Model, PrimaryKey, Default, DataType, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { DemoModel } from "./demo.model";

export class FrameModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column({ type: DataType.UUID, allowNull: false, field: 'id' })
  declare id: string;

  @ForeignKey(() => DemoModel)
  @Column({ type: DataType.UUID, allowNull: false, field: 'demoId' })
  demoId: string;

  @Column({ type: DataType.TEXT, allowNull: false, field: 'html' })
  html: string;

  @Column({ type: DataType.INTEGER, allowNull: false, field: 'order' })
  order: number;

  @BelongsTo(() => DemoModel, { as: 'demo', foreignKey: 'demoId' })
  demo: DemoModel;
}