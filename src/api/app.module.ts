import { Module } from '@nestjs/common';
import AccessLongUrl from 'src/domain/shortener/usecases/AccessLongUrl';
import ShortUrlUseCase from 'src/domain/shortener/usecases/ShortUrlUseCase';
import { ShortenerController } from './shortener/controllers/shortener.controller';
import ListUrlRepository from 'src/infra/shortener/repositories/ListUrlRepository';

@Module({
  imports: [],
  controllers: [ShortenerController],
  providers: [
    ShortUrlUseCase,
    AccessLongUrl,
    {
      provide: 'UrlRepository',
      useClass: ListUrlRepository,
    },
  ],
})
export class AppModule {}
