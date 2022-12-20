import { Controller, Get, Query } from '@nestjs/common';
// import ShortUrlDto from '../dtos/ShortUrlDto';

@Controller('')
export class ShortenerController {
  @Get()
  async shortUrl(@Query('name') name: object) {
    return 'Hello World. Hey, ' + name + '! How are you?';
  }
}
