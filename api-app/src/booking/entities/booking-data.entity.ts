import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity({ name: "bookings-table" })
export class BookingData {
	@ObjectIdColumn()
	_id: ObjectId;

	@Column()
	mall_id: string;

	@Column()
	booking_date: string;

	@Column()
	amount_booked: string;

	@Column()
	booking_contact_name: string;

	@Column()
	booking_contact: string;

	@Column()
	ngo_id: string;

	@Column()
	collection_start_date: string;

	@Column()
	collection_end_date: string;
}