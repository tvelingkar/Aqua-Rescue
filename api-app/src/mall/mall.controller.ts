import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { MallData } from './entities/mall-data.entity';
import { MallService } from './mall.service';
import { MallCreateResponse } from './dto/mall-data.dto';

@Controller('mall')
export class MallController {
    constructor(private mallService: MallService) { }

    @Post('/create')
	async createNgo(@Body() payload: MallData, @Res() response): Promise<MallCreateResponse> {
		try {
			await this.mallService.createMall(payload);
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
