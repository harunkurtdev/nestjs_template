import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AuthDto } from './../auth/dto/auth.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpCode, HttpStatus, Query } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';

@ApiTags('Users')
@Controller({
  path: 'users',
  version: '1.0',
})
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  @ApiOperation({ summary: 'Kullanici oluşturuyor.' })
  @ApiResponse({ status: 200, description: 'Create New User', type: UserEntity })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Post('data/admin')
  @ApiOperation({ summary: 'Admin oluşturur' })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 200, description: 'Create New Admin User', type: UserEntity })
  async createAdmin(@Body() createUserDto: AuthDto): Promise<User> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Tüm kullanıcıları çeker' })
  @ApiResponse({ status: 200, description: 'Getting All User', type: [UserEntity] })
  async findAll(@Query() q: string): Promise<User[]> {
    return await this.usersService.findAll(q);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Kullanıcı bulur.' })
  @ApiResponse({ status: 200, description: 'find User', type: UserEntity })
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.usersService.findById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Kullanıcı Değişikleri update eder' })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 201, description: 'User Update', type: UserEntity })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.updateOne(id, updateUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Kullanıcı Değişikleri update eder' })
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({ status: 201, description: 'User Update', type: UserEntity })
  async updatemail(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // mail correction
    return await this.usersService.updateOne(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Kullanici siler' })
  async remove(@Param('id') id: string) {
    return await this.usersService.delete(id);
  }
}
