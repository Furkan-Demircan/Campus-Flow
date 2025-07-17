import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { BaseResponse } from 'src/_base/response/base.response';
import { ResponseMessages } from '../enums/ResponseMessager.enum';
import { DtoPrefix } from '../enums/ValidationMessages.enum';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const prefixList: DtoPrefix = Object.values(DtoPrefix);
    const validationMessage = prefixList.find((prefix) => {
      return exception.message && exception.message.startsWith(prefix);
    });

    if (validationMessage) {
      return response
        .status(status)
        .json(new BaseResponse(null, ResponseMessages, false));
    } else {
      let responseMessage: ResponseMessages;
      switch (status) {
        case 400:
          responseMessage = ResponseMessages.BAD_REQUEST;
          break;
        case 404:
          responseMessage = ResponseMessages.NOT_FOUND;
          break;
        case 500:
          responseMessage = ResponseMessages.INTERNAL_SERVER_ERROR;
          break;
        case 401:
          responseMessage = ResponseMessages.UNAUTHORIZED;
          break;
        default:
          responseMessage = ResponseMessages.BAD_GATEWAY;
      }

      response
        .status(status)
        .json(new BaseResponse(null, ResponseMessages, false));
    }
  }
}
