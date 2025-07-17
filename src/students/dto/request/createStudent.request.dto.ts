import { IsNotEmpty } from 'class-validator';
import {
  getValidationMessage,
  DtoPrefix,
  ValidationType,
} from 'src/_common/enums/ValidationMessages.enum';
export class CreateStudentRequestDto {
  @IsNotEmpty({
    message: getValidationMessage(DtoPrefix.NAME, ValidationType.IS_NOT_EMPTY),
  })
  name: string;
  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;
  @IsNotEmpty({ message: 'Identity number is required' })
  identityNumber: number;
}
