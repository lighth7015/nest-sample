import { Controller, Bind, Body, Render, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService
	) {
		
	}

	@Get()
	@Render('index')
	public hello() {
		return { ext: 'ts', message: this.appService.hello };
	}
}
