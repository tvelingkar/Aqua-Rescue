import { Column, Entity, ObjectId, ObjectIdColumn,Timestamp } from 'typeorm';

@Entity({ name: "water-leakage-data" })
export class SensorData {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  mall_id: string;

  @Column()
  sensor_id: string;

  @Column()
  water_usage: string;

  @Column()
  timestamp: string;

  @Column()
  excess_water: string;
  
  @Column()
  leak_detected: string;

  @Column({ type: 'timestamp' })
  resolution_date:Date
}