import { Controller, Get } from '@nestjs/common';

@Controller()
export class FrameController {
  @Get('frame/:id_frame')
  getFrame(): { status: string } {
    return { status: 'ok' };
  }
}
