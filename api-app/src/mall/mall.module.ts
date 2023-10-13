import { Module } from '@nestjs/common';
import { MallController } from './mall.controller';
import { MallService } from './mall.service';
import { MallData } from './entities/mall-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ MallData ])],
  controllers: [MallController],
  providers: [MallService]
})
export class MallModule {}
