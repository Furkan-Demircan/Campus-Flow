import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/_base/entity/base.entity';
import { Student } from './Student';

@Entity()
export class Class extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', nullable: true, length: 200 })
  description: string;

  @Column({ type: 'varchar', length: 15 })
  code: string;

  @OneToMany(() => Student, (student) => student.class)
  students: Student[];
}
