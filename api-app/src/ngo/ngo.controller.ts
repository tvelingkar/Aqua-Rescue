import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
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
}
