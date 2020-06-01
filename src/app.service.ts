import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	private message: string = 'Hello, world!';
	
	public get hello(): string {
		return this.message;
	}
}
