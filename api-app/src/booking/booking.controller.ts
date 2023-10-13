import { Controller, Get, Param, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingData } from './entities/booking-data.entity';
import { BookingResponse } from './dto/booking.dto';

@Controller('booking')
export class BookingController {
	constructor(private BookingService: BookingService) {}

	@Get('/')
	async getBookings(): Promise<BookingData[]> {
		return await this.BookingService.getBookings();
	}

	@Get('/:id')
	async getBookingDetails(@Param('id') id: any): Promise<BookingData> {
		return await this.BookingService.getBookingDetails(id);
	}

	@Post('/')
	async bookAvailableWater(@Body() payload: BookingData, @Res() response): Promise<BookingResponse> {
		try {
			await this.BookingService.bookAvailableWater(payload);
			return response.status(HttpStatus.CREATED).json({
				status: 'Success'
			});
		} catch(err) {
			return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				status: 'Failure'
			});
		}
	}
}
