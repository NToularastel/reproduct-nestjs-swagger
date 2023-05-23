import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SomeDto } from './some.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() test: SomeDto): string {
    return this.appService.getHello();
  }
}
