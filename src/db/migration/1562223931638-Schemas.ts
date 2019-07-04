import { MigrationInterface, QueryRunner } from 'typeorm';

export class Schemas1562223931638 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createSchema('db_public');
        await queryRunner.createSchema('db_private');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropSchema('db_private');
        await queryRunner.dropSchema('db_public');
    }
}
