import { Inject, Injectable } from '@nestjs/common';
import { generate as generateShortUuid } from 'shortid';
import Failure from 'src/common/errors/Failure';
import UseCase from 'src/common/usecase/UseCase';
import { v4 as UuidV4 } from 'uuid';
import LongUrl from '../dtos/LongUrl';
import Url from '../entities/Url';
import UrlRepository from '../repositories/UrlRepository';

@Injectable()
class ShortUrlUseCase implements UseCase<LongUrl, Url> {
  constructor(
    @Inject('UrlRepository') private readonly repository: UrlRepository,
  ) {}

  async execute(param: LongUrl): Promise<Url | Failure> {
    const shortCode = this.generateShortCode();

    const shortUrl = new Url(UuidV4(), param.url, shortCode);

    return await this.repository.save(shortUrl);
  }

  generateShortCode(): string {
    return generateShortUuid();
  }
}

export default ShortUrlUseCase;
