import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/_base/entity/base.entity';
import { Exam } from './Exam';
import { Student } from './Student';

@Entity()
export class ExamResult extends BaseEntity {
  @Column({ type: 'int' })
  score: number;

  @ManyToOne(() => Exam, (exam) => exam.results, {})
  exam: Exam;

  @ManyToOne(() => Student, (student) => student.examResults, {})
  student: Student;
}
