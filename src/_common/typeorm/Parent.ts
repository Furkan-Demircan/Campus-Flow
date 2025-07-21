import { BaseEntity } from 'src/_base/entity/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Student } from './Student';

@Entity()
export class Parent extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  firstName: string;

  @Column({ type: 'varchar', length: 50 })
  lastName: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 50, comment: 'Format = 905051234567' })
  phone: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @ManyToMany(() => Student, (student) => student.parents, {})
  students: Student[];
}
