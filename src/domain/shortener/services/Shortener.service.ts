import Failure from 'src/common/errors/Failure';
import LongUrl from '../dtos/LongUrl';
import ShortCode from '../dtos/ShortCode';
import Url from '../entities/Url';
import { LongUrlNotFound } from '../errors/UrlNotFound';
import UrlRepository from '../repositories/UrlRepository';
import { Inject, Injectable } from '@nestjs/common';
// TODO(): Invert control/dependency of both ShortId and Uuid Provider
import * as ShortIdProvider from 'shortid';
import * as UuidProvider from 'uuid';

@Injectable()
class ShortenerService {
  constructor(
    @Inject('UrlRepository') private readonly urlRepository: UrlRepository,
  ) {}

  async accessLongUrl(param: ShortCode): Promise<Url | Failure> {
    const url = await this.urlRepository.findByShortCode(param.code);

    if (!url) return new LongUrlNotFound(param.code);

    return url;
  }

  async shortUrl(param: LongUrl): Promise<Url | Failure> {
    const shortCode = this.generateShortCode();

    const shortUrl = new Url(UuidProvider.v4(), param.url, shortCode);

    return await this.urlRepository.save(shortUrl);
  }

  private generateShortCode(): string {
    return ShortIdProvider.generate();
  }
}

export default ShortenerService;
