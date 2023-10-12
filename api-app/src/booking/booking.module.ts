import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingData } from './entities/booking-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ BookingData ])],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
