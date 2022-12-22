import { IsNotEmpty, IsUrl } from 'class-validator';

class ShortUrlRequestModel {
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;
}

export default ShortUrlRequestModel;
