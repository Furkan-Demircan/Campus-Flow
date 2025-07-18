import { IsNotEmpty, IsNumber } from 'class-validator';
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
  @IsNotEmpty({
    message: getValidationMessage(
      DtoPrefix.LAST_NAME,
      ValidationType.IS_NOT_EMPTY,
    ),
  })
  lastName: string;
  @IsNotEmpty({
    message: getValidationMessage(
      DtoPrefix.IDENTITY_NUMBER,
      ValidationType.IS_NOT_EMPTY,
    ),
  })
  @IsNumber(
    {},
    {
      message: getValidationMessage(
        DtoPrefix.IDENTITY_NUMBER,
        ValidationType.MUST_BE_NUMBER,
      ),
    },
  )
  identityNumber: number;
}
