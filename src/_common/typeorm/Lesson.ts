import { Exam } from './Exam';
import { BaseEntity } from 'src/_base/entity/base.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToMany(() => Exam, (exam) => exam.lesson, {})
  exams: Exam[];
}
