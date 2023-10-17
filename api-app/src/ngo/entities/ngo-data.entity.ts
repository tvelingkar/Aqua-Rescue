import { Column, Entity, ObjectId, ObjectIdColumn,Timestamp } from 'typeorm';

@Entity({ name: "NGO-Table" })
export class NGOData {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  ngo_name: string;

  @Column()
  registration_number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;
  
  @Column()
  address: string;
 
  @Column()
  email_id: string;
   
}