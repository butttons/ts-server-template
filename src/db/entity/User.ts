import { Entity, PrimaryGeneratedColumn, Code, Column, UpdateDateColumn, BaseEntity } from 'typeorm';

@Entity({ schema: 'db_public' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 255 })
    email: string;

    @UpdateDateColumn()
    updated_at: Date;
}
