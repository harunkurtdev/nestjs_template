import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GetCurrentUserId } from './../common/decorators';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

@Controller({
  path: 'business',
  version: '1.0',
})
export class BusinessController {
  constructor(private readonly businessService: BusinessService) { }

  @Post()
  @ApiProperty({ description: '', type: CreateBusinessDto })
  @ApiOperation({ summary: 'Kullanici Kayit Edilir.' })
  async create(
    @Body() createBusinessDto: CreateBusinessDto,
    @GetCurrentUserId() subId: string,
  ) {
    createBusinessDto.owner = subId;
    return await this.businessService.create(createBusinessDto);
  }

  @Get()
  @ApiProperty({ type: [CreateBusinessDto] })
  async findAll(): Promise<CreateBusinessDto[]> {
    return await this.businessService.findAll();
  }

  @Get(':id')
  @ApiProperty({ type: CreateBusinessDto })

  async findOne(@Param('id') id: string): Promise<CreateBusinessDto> {
    return await this.businessService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBusinessDto: UpdateBusinessDto,
  ) {
    return await this.businessService.update(id, updateBusinessDto);
  }

  @Delete(':id')
  
  async remove(@Param('id') id: string) {
    return await this.businessService.remove(id);
  }
}
