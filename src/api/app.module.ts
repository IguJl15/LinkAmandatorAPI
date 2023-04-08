import {
  Module,
} from '@nestjs/common';
import ShortenerService from 'src/domain/shortener/services/Shortener.service';
import ListUrlRepository from 'src/infra/shortener/repositories/ListUrlRepository';
import ShortenerController from './shortener/controllers/Shortener.controller';
import UsersController from './users/controllers/users.controller';
import UsersService from 'src/domain/users/Users.service';
import { ListUserRepository } from 'src/infra/users/repositories/ListUserRepository';

@Module({
  imports: [],
  controllers: [UsersController, ShortenerController],
  providers: [
    ShortenerService,
    UsersService,
    {
      provide: 'UrlRepository',
      useClass: ListUrlRepository,
    },
    {
      provide: 'UserRepository',
      useClass: ListUserRepository,
    },
  ],
})
export class AppModule {}
