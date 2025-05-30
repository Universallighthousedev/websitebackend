import { IsString, IsUrl, IsOptional, IsNumber, Min } from 'class-validator';

export class CauseImageDto {
  @IsUrl()
  url: string;

  @IsOptional()
  @IsString()
  alt?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  order?: number;
}
