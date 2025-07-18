import { Injectable } from '@nestjs/common';
import { CreateStudentRequestDto } from './dto/request/createStudent.request.dto';

@Injectable()
export class StudentsService {
  create(createStudentDto: CreateStudentRequestDto) {
    return createStudentDto;
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  // update(id: number, updateStudentDto: UpdateStudentDto) {
  //   return `This action updates a #${id} student`;
  // }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
