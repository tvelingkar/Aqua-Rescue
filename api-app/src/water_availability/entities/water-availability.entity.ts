import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: "Water-Availability-Table" })
export class WaterAvailabilityData {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	mall_id: string;

	@Column()
	water_available: string;

	@Column()
	water_booked: string;
}