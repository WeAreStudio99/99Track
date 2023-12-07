import { Controller, Get } from '@nestjs/common';

@Controller()
export class RootController {
  @Get()
  findAll() {
    return 'Welcome to the 99Track API 🌐';
  }
}
