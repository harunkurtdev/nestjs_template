import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Supplier } from './schema/supplier.schema';

@ApiTags('Suppliers')
@Controller({
  path: 'suppliers',
  version: '1.0',
})

export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) { }

  @Post()
  @ApiOperation({ summary: 'Yeni Bahçe yeri ekler' })
  @ApiResponse({ status: 201, description: 'JWT Token Getting', type: [Supplier] })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createSupplierDto: CreateSupplierDto) {
    return await this.suppliersService.create(createSupplierDto);
  }

  @Get()
  @ApiOperation({ summary: 'Tüm Bahçe yerlerini çeker.' })
  @ApiResponse({ status: 200, description: 'Getting All Suppliers', type: [Supplier] })
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Bahçe Yeri' })
  async findOne(@Param('id') id: string) {
    return await this.suppliersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Bahçe Yeri Günceller' })
  @ApiResponse({ status: 200, description: 'Supplier Updated', type: [Supplier] })
  async update(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return await this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Bahçe Yeri Silinir' })
  @ApiResponse({ status: 200, description: 'Supplier Deleted', type: [Supplier] })
  async remove(@Param('id') id: string) {
    return await this.suppliersService.remove(id);
  }
}
