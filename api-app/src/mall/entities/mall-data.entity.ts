import { Decimal128 } from 'mongoose';
import { Column, Entity, ObjectId, ObjectIdColumn,Timestamp } from 'typeorm';

@Entity({ name: "Mall-Master-Table" })
export class MallData {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  mall_id: string;

  @Column()
  mall_name: string;

  @Column()
  mall_location: string;

  @Column()
  water_available: Decimal128;

}