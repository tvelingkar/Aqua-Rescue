import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: "bookings-table" })
export class BookingData {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	mall_id: string;

	@Column({ type: 'timestamp' })
	booking_date: Date;

	@Column()
	amount_booked: number;

	@Column()
	booking_contact_name: string;

	@Column()
	booking_contact: string;

	@Column()
	ngo_id: string;

	@Column()
	collection_start_time: string;

	@Column()
	collection_end_time: string;

	@Column({ type: 'timestamp' })
	created_date: Date;
}