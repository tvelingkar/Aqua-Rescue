import { Column, Entity, ObjectId, ObjectIdColumn,Timestamp } from 'typeorm';

@Entity({ name: "sensor-data-table" })
export class SensorData {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  block_no: string;

  @Column()
  excess_use_or_not: string;

  @Column()
  floor_no: string;
  
  @Column({ default: false })
  is_active: Boolean;

  @Column()
  is_water_resusable: string;

  @Column()
  mall_id: string;

  @Column()
  sensor_id: string;

  @Column()
  timestamp: string;

  @Column({ type: 'timestamp' })
  resolution_date:Date
}