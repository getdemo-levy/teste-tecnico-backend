import { Controller, Get } from '@nestjs/common';

@Controller()
export class DemoController {
  @Get('demo/:id_demo')
  getDemo(): { status: string } {
    return { status: 'ok' };
  }
}
