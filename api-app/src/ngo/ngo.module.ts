import { Module } from '@nestjs/common';
import { NgoController } from './ngo.controller';
import { NgoService } from './ngo.service';
import { NGOData } from './entities/ngo-data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ NGOData ])],
  controllers: [NgoController],
  providers: [NgoService]
})
export class NgoModule {}
