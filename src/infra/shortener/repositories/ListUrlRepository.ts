import { Injectable } from '@nestjs/common';
import Url from 'src/domain/shortener/entities/Url';
import UrlRepository from 'src/domain/shortener/repositories/UrlRepository';

@Injectable()
class ListUrlRepository implements UrlRepository {
  private readonly urlList: Url[] = [];

  findByShortCode(shortUrl: string): Url | null {
    return this.urlList.filter((url) => url.shortCode === shortUrl)[0] || null;
  }

  findByLongUrl(longUrl: string): Url | null {
    return this.urlList.filter((url) => url.longUrl === longUrl)[0] || null;
  }

  save(url: Url): Url {
    this.urlList.push(url);
    return url;
  }
}

export default ListUrlRepository;
