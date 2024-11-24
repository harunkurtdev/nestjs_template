import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';

import { Tokens } from './../types';
import { RtGuard } from './../common/guards';
import {
  GetCurrentUserId,
  GetCurrentUser,
  Public,
} from './../common/decorators';
import { AuthDto } from './dto/auth.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  @ApiOperation({ summary: 'JWT Token Getting' })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, description: 'JWT Token Getting', type: Tokens })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async login(
    @Body() dto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<Tokens> {
    const token = await this.authService.login(dto);
    res.cookie('access_cookies', token.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      path: '/',
      sameSite: 'none',
      secure: true,
    });
    res.send({
      success: true,
    });
    return token;
  }

  @Public()
  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Kullanici Kayit Edilir.' })
  @ApiResponse({ status: 201, description: 'User Created', type: Tokens })
  async register(@Body() dto: AuthDto): Promise<Tokens> {
    return await this.authService.register(dto);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Kullanici Çıkış Yapar.' })
  async logout(@GetCurrentUserId() userId: string) {
    return await this.authService.logout(userId);
  }

  @Public()
  @UseGuards(RtGuard)
  @Post('/refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Refresh Token' })
  async refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
    @GetCurrentUserId() userId: string,
  ) {
    return await this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('profile')
  @ApiOperation({ summary: 'Kullanici Getirir' })
  async profile(@GetCurrentUserId() userId: string) {
    return await this.authService.getProfile(userId);
  }
}
