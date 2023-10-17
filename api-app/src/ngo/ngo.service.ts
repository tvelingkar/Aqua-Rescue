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

  async getNGODetails(reg_no: string): Promise<NGOData[]> {
    return await this.ngoDataRepository.find({where:{registration_number: reg_no}});
  }
  
  async getNGODetailsByEmailId(email: string): Promise<NGOData[]> {
    return await this.ngoDataRepository.find({where:{email_id: email}});
  }
}
