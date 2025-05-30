import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRaisedToCauseAndDonations1680000000000
  implements MigrationInterface
{
  name = 'AddRaisedToCauseAndDonations1680000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "causes" ADD "raised" decimal(12,2) NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(`CREATE TABLE "donations" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "amount" decimal(12,2) NOT NULL,
            "donorName" varchar(255),
            "donorEmail" varchar(255),
            "causeId" uuid NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_donations_id" PRIMARY KEY ("id"),
            CONSTRAINT "FK_donations_cause" FOREIGN KEY ("causeId") REFERENCES "causes"("id") ON DELETE CASCADE
        )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "donations"`);
    await queryRunner.query(`ALTER TABLE "causes" DROP COLUMN "raised"`);
  }
}
