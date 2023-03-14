import {
  Module,
} from '@nestjs/common';
import ShortenerService from 'src/domain/shortener/services/Shortener.service';
import ListUrlRepository from 'src/infra/shortener/repositories/ListUrlRepository';
import ShortenerController from './shortener/controllers/Shortener.controller';
import UsersController from './users/controllers/users.controller';

@Module({
  imports: [],
  controllers: [UsersController, ShortenerController],
  providers: [
    ShortenerService,
    {
      provide: 'UrlRepository',
      useClass: ListUrlRepository,
    },
  ],
})
export class AppModule {}
