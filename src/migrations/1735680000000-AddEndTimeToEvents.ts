import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEndTimeToEvents1735680000000 implements MigrationInterface {
    name = 'AddEndTimeToEvents1735680000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ADD "endTime" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "endTime"`);
    }
}
