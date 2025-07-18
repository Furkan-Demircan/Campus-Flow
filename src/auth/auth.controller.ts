import { Body, Controller, Post, Res } from '@nestjs/common';
import { loginRequestDto } from './dto/request/loginRequest.dto';
import { Response } from 'express';
import { LoginResponseDto } from './dto/response/loginResponse.dto';
import { ResponseMessages } from 'src/_common/enums/ResponseMessager.enum';
import { BaseResponse } from 'src/_base/response/base.response';

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() body: loginRequestDto, @Res() res: Response<LoginResponseDto>): void {
    const data = {
      accessToken: 'exampleAccessToken',
      refreshToken: 'exampleRefreshToken',
      user: { name: 'John', lastName: 'Doe', pay: 5000 },
    };
    res.json(new BaseResponse(data, ResponseMessages.SUCCESS, true));
  }

  @Post('register')
  register() {
    // Handle registration
  }
  @Post('logout')
  logout() {}

  @Post('refresh-token')
  refreshToken() {}
}
