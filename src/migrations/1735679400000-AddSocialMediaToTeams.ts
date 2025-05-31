import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSocialMediaToTeams1735679400000 implements MigrationInterface {
  name = 'AddSocialMediaToTeams1735679400000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Add social media columns to teams table
    await queryRunner.query(`
      ALTER TABLE "teams" 
      ADD COLUMN "facebook" varchar,
      ADD COLUMN "email" varchar,
      ADD COLUMN "tiktok" varchar,
      ADD COLUMN "twitter" varchar,
      ADD COLUMN "linkedin" varchar
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove social media columns from teams table
    await queryRunner.query(`
      ALTER TABLE "teams" 
      DROP COLUMN IF EXISTS "linkedin",
      DROP COLUMN IF EXISTS "twitter",
      DROP COLUMN IF EXISTS "tiktok",
      DROP COLUMN IF EXISTS "email",
      DROP COLUMN IF EXISTS "facebook"
    `);
  }
}
