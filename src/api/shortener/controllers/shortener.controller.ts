import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post
} from '@nestjs/common';
import Failure from 'src/common/errors/Failure';
import LongUrl from 'src/domain/shortener/dtos/LongUrl';
import ShortCode from 'src/domain/shortener/dtos/ShortCode';
import AccessLongUrl from 'src/domain/shortener/usecases/AccessLongUrl';
import ShortUrlUseCase from 'src/domain/shortener/usecases/ShortUrlUseCase';
import ShortUrlRequestModel from '../dtos/ShortUrlDto';
// import ShortUrlDto from '../dtos/ShortUrlDto';

@Controller('')
export class ShortenerController {
  constructor(
    private readonly shortUrlUseCase: ShortUrlUseCase,
    private readonly accessLongUrlUseCase: AccessLongUrl,
  ) {}

  @Get(':code')
  async accessLongUrl(@Param('code') code: string) {
    console.log('Trying to access from short code ' + code);

    const shortCode = new ShortCode(code);

    const result = await this.accessLongUrlUseCase.execute(shortCode);

    if (result instanceof Failure) throw new HttpException(result.error, 404);

    return {
      url: result.longUrl,
    };
  }

  @Post()
  async shortUrl(@Body() urlShortReq: ShortUrlRequestModel) {
    const longUrl = new LongUrl(urlShortReq.longUrl);

    const result = await this.shortUrlUseCase.execute(longUrl);

    if (result instanceof Failure) return new HttpException(result.error, 500);

    return result;
  }

  @Get('/a')
  funcao() {
    console.log('A');
  }
}
