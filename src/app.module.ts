import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CausesModule } from './causes/causes.module';
import { Cause } from './causes/cause.entity';
import { CauseImage } from './causes/entities/cause-image.entity';
import { EventsModule } from './events/events.module';
import { Event } from './events/event.entity';
import { TeamsModule } from './teams/teams.module';
import { Team } from './teams/team.entity';
import { GalleryModule } from './gallery/gallery.module';
import { Gallery } from './gallery/gallery.entity';
import { DonationsModule } from './donations/donations.module';
import { Donation } from './donations/donation.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: parseInt(
          configService.get<string>('DATABASE_PORT') || '5432',
          10,
        ),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [Cause, CauseImage, Event, Team, Gallery, Donation],
        migrations: [__dirname + '/migrations/*.{ts,js}'],
        migrationsRun: configService.get<string>('NODE_ENV') === 'production',
        synchronize: configService.get<string>('NODE_ENV') === 'development',
        ssl:
          configService.get<string>('NODE_ENV') === 'production'
            ? { rejectUnauthorized: false }
            : false,
        cache: false,
      }),
    }),

    CausesModule,
    EventsModule,
    TeamsModule,
    GalleryModule,
    DonationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
