import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) { }

  @Post()
  @ApiOperation({ summary: 'Create Role' })
  @ApiProperty({ description: 'Create Role', type: String })
  @ApiResponse({ status: 201, description: 'Role Created', type: String })
  create(@Body() createRoleDto: CreateRoleDto): string {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get All Roles' })
  @ApiResponse({ status: 200, description: 'Get All Roles', type: [String] })
  @ApiProperty({ description: 'Get All Roles', type: [String] })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Role' })
  @ApiResponse({ status: 200, description: 'Get Role', type: String })
  @ApiProperty({ description: 'Get Role', type: String })
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update Role', type: String })
  @ApiOperation({ summary: 'Update Role' })
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Role' })
  @ApiResponse({ status: 200, description: 'Delete Role', type: String })
  @ApiProperty({ description: 'Delete Role', type: String })
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
}
