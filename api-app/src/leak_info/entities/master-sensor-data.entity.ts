import { Column, Entity, ObjectId, ObjectIdColumn,Timestamp } from 'typeorm';

@Entity({ name: "Sensor-Master-Table" })
export class MasterSensorData {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  mall_id: string;

  @Column()
  sensor_id: string;

  @Column()
  floor_no: string;

  @Column()
  block_no: string;

  @Column()
  is_water_reusable: string;
  
  @Column()
  is_active: string;

}