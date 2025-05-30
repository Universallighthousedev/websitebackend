import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables from .env.migration for production migrations
if (
  process.env.NODE_ENV === 'production' ||
  process.env.MIGRATION_ENV === 'production'
) {
  dotenv.config({ path: '.env.migration' });
} else {
  dotenv.config();
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  database: process.env.DATABASE_NAME || 'universal-lighthouse',
  entities: [__dirname + '/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});
