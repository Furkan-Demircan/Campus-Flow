import { BaseEntity } from 'src/_base/entity/base.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Class } from './Class';
import { Parent } from './Parent';
import { StudentStatus } from '../enums/Student.enum';
import { ExamResult } from './ExamResult';

@Entity()
export class Student extends BaseEntity {
  @Column({ type: 'varchar', length: 50, nullable: false })
  firstName: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  lastName: string;

  @Column({ type: 'timestamp', nullable: true })
  dateOfBirth: Date;

  @Column({ type: 'enum', enum: StudentStatus, default: StudentStatus.ACTIVE })
  status: StudentStatus;

  @ManyToOne(() => Class, (element) => element.students, {})
  class: Class;

  @ManyToMany(() => Parent, (element) => element.students, {})
  parents: Parent[];

  @OneToMany(() => ExamResult, (result) => result.student, {})
  examResults: ExamResult[];
}
