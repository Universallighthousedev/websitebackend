import { IsString, IsUrl, IsOptional } from 'class-validator';

export class CauseImageDto {
  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  alt?: string;
}
