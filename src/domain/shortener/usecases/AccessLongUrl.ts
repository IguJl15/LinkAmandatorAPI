import Failure from 'src/common/errors/Failure';
import UseCase from 'src/common/usecase/UseCase';
import ShortCode from '../dtos/ShortCode';
import Url from '../entities/Url';
import { LongUrlNotFound } from '../errors/UrlNotFound';
import UrlRepository from '../repositories/UrlRepository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
class AccessLongUrl implements UseCase<ShortCode, Url> {
  constructor(
    @Inject('UrlRepository') private readonly repository: UrlRepository,
  ) {}

  async execute(param: ShortCode): Promise<Url | Failure> {
    const url = await this.repository.findByShortCode(param.code);

    if (!url) return new LongUrlNotFound(param.code);

    return url;
  }
}

export default AccessLongUrl;
