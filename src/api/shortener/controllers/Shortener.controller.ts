import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import Failure from 'src/common/errors/Failure';
import LongUrl from 'src/domain/shortener/dtos/LongUrl';
import ShortCode from 'src/domain/shortener/dtos/ShortCode';
import ShortenerService from 'src/domain/shortener/services/Shortener.service';
import ShortUrlRequestModel from '../dtos/ShortUrlDto';
// import ShortUrlDto from '../dtos/ShortUrlDto';

@Controller()
class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Get(':code')
  async accessLongUrl(@Param('code') code: string) {
    const shortCode = new ShortCode(code);

    const result = await this.shortenerService.accessLongUrl(shortCode);

    if (result instanceof Failure) throw new HttpException(result.error, 404);

    return {
      url: result.longUrl,
    };
  }

  @Post()
  async shortUrl(@Body() urlShortReq: ShortUrlRequestModel) {
    const longUrl = new LongUrl(urlShortReq.longUrl);

    const result = await this.shortenerService.shortUrl(longUrl);

    if (result instanceof Failure) return new HttpException(result.error, 500);

    return result;
  }
}

export default ShortenerController;
