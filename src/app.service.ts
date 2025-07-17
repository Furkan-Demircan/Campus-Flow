import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BaseResponse } from './_base/response/base.response';
import { ResponseMessages } from './_common/enums/ResponseMessager.enum';

@Injectable()
export class AppService {
  getHello(): BaseResponse<{ id: number; name: string }[]> {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
    throw new UnauthorizedException();
    return new BaseResponse(users, ResponseMessages.SUCCESS, true);
  }
}
