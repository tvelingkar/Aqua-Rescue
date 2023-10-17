import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: "Mall-Master-Table" })
export class WaterAvailabilityData {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	mall_id: string;

	@Column()
	mall_name: string;

	@Column()
	mall_location: string;

	@Column()
	water_available: Number;

}