import { ResponseMessages } from 'src/_common/enums/ResponseMessager.enum';
export class BaseResponse<T> {
  data: T;
  message: ResponseMessages;
  success: boolean;

  constructor(
    data: T,
    message: ResponseMessages = ResponseMessages.SUCCESS,
    success: boolean,
  ) {
    this.data = data;
    this.message = message;
    this.success = success;
  }
}
