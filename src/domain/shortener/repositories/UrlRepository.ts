import Url from '../entities/Url';

interface UrlRepository {
  findByShortCode(shortUrl: string): PromiseOr<Url | null>;
  findByLongUrl(longUrl: string): PromiseOr<Url | null>;
  save(url: Url): PromiseOr<Url>;
}

export default UrlRepository;
