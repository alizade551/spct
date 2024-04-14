import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPhoneAgain1713091677349 implements MigrationInterface {
    name = 'AddUserPhoneAgain1713091677349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
