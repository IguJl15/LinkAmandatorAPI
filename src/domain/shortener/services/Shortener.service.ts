import Failure from 'src/common/errors/Failure';
import LongUrl from '../dtos/LongUrl';
import ShortCode from '../dtos/ShortCode';
import Url from '../entities/Url';
import { LongUrlNotFound } from '../errors/UrlNotFound';
import UrlRepository from '../repositories/UrlRepository';
// TODO(): Invert control/dependency of both ShortId and Uuid Provider
import { Inject } from '@nestjs/common';
import * as ShortIdProvider from 'shortid';
import * as UuidProvider from 'uuid';
import EmptyUrl from '../errors/EmptyUrl';

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
    if (param.url.length < 3) return new EmptyUrl();

    const shortCode = this.generateShortCode();
    const uuid = this.generateUuid();

    const url = new Url(uuid, param.url, shortCode);

    return await this.urlRepository.save(url);
  }

  private generateUuid() {
    return UuidProvider.v4();
  }

  private generateShortCode(): string {
    return ShortIdProvider.generate();
  }
}

export default ShortenerService;
