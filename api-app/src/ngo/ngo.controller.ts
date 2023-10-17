import { Body, Controller, HttpStatus, Post, Res, Get, Param } from '@nestjs/common';
import { NgoService } from './ngo.service';
import { NGOCreateResponse } from './dto/ngo-data.dto';
import { NGOData } from './entities/ngo-data.entity';

@Controller('ngo')
export class NgoController {
    constructor(private ngoService: NgoService) { }

    @Post('/create')
	async createNgo(@Body() payload: NGOData, @Res() response): Promise<NGOCreateResponse> {
		try {
			await this.ngoService.createNgo(payload);
			return response.status(HttpStatus.CREATED).json({
				status: 'Success'
			});
		} catch(err) {
			return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
				status: 'Failure'
			});
		}
	}

	@Get('/ngo_details/:reg_no')
	async getNGODetails(@Param('reg_no') reg_no: string): Promise<NGOData[]>{
		return await this.ngoService.getNGODetails(reg_no);
	}

	@Get('/by_email/:email')
	async getNGODetailsbyEmail(@Param('email') email: string): Promise<NGOData[]>{
		return await this.ngoService.getNGODetailsByEmailId(email);
	}
}
