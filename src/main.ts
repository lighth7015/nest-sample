import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setBaseViewsDir(join(__dirname, '.', 'views'));
	console.log( "Template directory:", join(__dirname, '.', 'views'));
	app.set(join(__dirname, '../..', 'views'));
	
	app.setViewEngine('express-react-views');
	await app.listen(3000);
}

bootstrap();
