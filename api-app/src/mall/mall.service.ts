import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MallData } from './entities/mall-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MallService {
    constructor(
        @InjectRepository(MallData) private mallDataRepository: Repository<MallData>,
      ) {}
    
    async createMall(mallData: MallData): Promise<MallData> {
		const mallDetails = {...mallData};
		return this.mallDataRepository.save(mallData);
	}
}
