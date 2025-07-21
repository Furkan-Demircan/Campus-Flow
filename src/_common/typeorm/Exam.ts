import { BaseEntity } from 'src/_base/entity/base.entity';
import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Lesson } from './Lesson';
import { ExamResult } from './ExamResult';

@Entity()
export class Exam extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'timestamp' })
  examDate: Date;

  @ManyToOne(() => Lesson, (lesson) => lesson.exams, {})
  lesson: Lesson;

  @OneToMany(() => ExamResult, (result) => result.exam, {})
  results: ExamResult[];
}
