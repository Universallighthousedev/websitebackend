import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateGalleryDto {
  @IsString()
  @IsNotEmpty()
  @IsUrl({}, { message: 'src must be a valid URL' })
  src: string;

  @IsString()
  @IsNotEmpty()
  alt: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
