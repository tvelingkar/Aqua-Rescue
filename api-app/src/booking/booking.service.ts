import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingData } from './entities/booking-data.entity';
import { BookingResponse } from './dto/booking.dto';

@Injectable()
export class BookingService {
	constructor(
		@InjectRepository(BookingData) private bookingDataRepository: Repository<BookingData>,
	) {}

	async getBookingDetails(id: any): Promise<BookingData> {
		return await this.bookingDataRepository.findOne({ where: { _id: id } });
	}

	async getBookings(): Promise<BookingData[]> {
		return await this.bookingDataRepository.find();
	}

	async bookAvailableWater(data: BookingData): Promise<BookingData> {
		return this.bookingDataRepository.create({
			amount_booked: data.amount_booked,
			booking_date: data.booking_date,
			booking_contact_name: data.booking_contact_name,
			booking_contact: data.booking_contact,
			collection_start_date: data.collection_start_date,
			collection_end_date: data.collection_end_date,
			ngo_id: data.ngo_id,
			mall_id: data.mall_id,
		});
	}
}
