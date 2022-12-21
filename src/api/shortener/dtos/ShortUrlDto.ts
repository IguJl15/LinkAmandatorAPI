import { IsNotEmpty } from 'class-validator';

class ShortUrlRequestModel {
  @IsNotEmpty()
  longUrl: string;
}

export default ShortUrlRequestModel;
