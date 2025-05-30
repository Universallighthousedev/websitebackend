import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

// Load environment variables from .env.migration for LOCAL production migrations
// In Railway, environment variables are automatically available
if (
  process.env.MIGRATION_ENV === 'production' &&
  !process.env.RAILWAY_ENVIRONMENT
) {
  // Only load .env.migration if running locally (not in Railway)
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
