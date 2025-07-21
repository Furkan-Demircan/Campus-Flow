import { Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/_base/entity/base.entity';

@Entity()
export class Manager extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({ type: 'varchar', length: 15, nullable: false, comment: 'Format = 905051234567' })
  phone: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;
}
