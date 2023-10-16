import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NGOData } from './entities/ngo-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NgoService {
    constructor(
        @InjectRepository(NGOData) private ngoDataRepository: Repository<NGOData>,
      ) {}
    
    async createNgo(ngoData: NGOData): Promise<NGOData> {
		const ngoDetails = {...ngoData};
		return this.ngoDataRepository.save(ngoDetails);
	}
}
