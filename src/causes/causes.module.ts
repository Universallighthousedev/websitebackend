// src/causes/causes.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CausesService } from './causes.service';
import { CausesController } from './causes.controller';
import { Cause } from './cause.entity';
import { CauseImage } from './entities/cause-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cause, CauseImage])],
  controllers: [CausesController],
  providers: [CausesService],
})
export class CausesModule {}
