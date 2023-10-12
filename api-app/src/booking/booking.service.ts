import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingData } from './entities/booking-data.entity';
import mongoose from 'mongoose';

@Injectable()
export class BookingService {
	constructor(
		@InjectRepository(BookingData) private bookingDataRepository: Repository<BookingData>,
	) {}

	async getBookingDetails(id: any): Promise<BookingData> {
		id = new mongoose.Types.ObjectId(id);
		return await this.bookingDataRepository.findOne({ where: { _id: id } });
	}

	async getBookings(): Promise<BookingData[]> {
		return await this.bookingDataRepository.find();
	}

	async bookAvailableWater(data: BookingData): Promise<BookingData> {
		const booking = new BookingData();
		booking.amount_booked = data.amount_booked
		booking.booking_date = data.booking_date;
		booking.booking_contact_name = data.booking_contact_name;
		booking.booking_contact = data.booking_contact;
		booking.collection_start_time = data.collection_start_time;
		booking.collection_end_time = data.collection_end_time;
		booking.ngo_id = data.ngo_id;
		booking.mall_id = data.mall_id;
		booking.created_date = new Date();
		return this.bookingDataRepository.save(booking);
	}
}
