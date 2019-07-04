import { MigrationInterface, QueryRunner } from 'typeorm';

export class JwtToken1562225113827 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`create type db_private.jwt_token as (
            role text,
            user_id uuid
        )`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`drop type if exists db_private.jwt_token`);
    }
}
