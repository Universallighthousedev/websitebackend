import { PartialType } from '@nestjs/mapped-types';
import { CreateCauseDto } from './create-cause.dto';

export class UpdateCauseDto extends PartialType(CreateCauseDto) {
  title?: string;
  goal?: number;
  category?: string;
  description?: string;
  images?: Array<{
    url: string;
    alt?: string;
    order?: number;
  }>;
}
