import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { LeakInfoModule } from './leak_info/leak_info.module';
import { BookingModule } from './booking/booking.module';
import { WaterAvailabilityModule } from './water_availability/water_availability.module';
import { NgoModule } from './ngo/ngo.module';
import { MallModule } from './mall/mall.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    LeakInfoModule,
    BookingModule,
    WaterAvailabilityModule,
    NgoModule,
    MallModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
