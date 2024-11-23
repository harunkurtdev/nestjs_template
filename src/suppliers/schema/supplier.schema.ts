import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type SupplierDocument = HydratedDocument<Supplier>;

@Schema({ timestamps: true })
export class Supplier {

  @ApiProperty({ example: "Botanik Gül Bahçesi", description: 'Çiçekçiler' })
  @Prop()
  name: string;


  @ApiProperty({ example: "555555555", description: 'Çiçekci Telefon Numarası' })
  @Prop()
  phone: string;


  @ApiProperty({ example: "İstanbul Bla bla", description: 'Bahçe adresi' })
  @Prop()
  address: string;


  @ApiProperty({ example: "555555555", description: 'Çiçekci Telefon Numarası' })
  @Prop()
  phone2: string;



  @ApiProperty({ example: new Date().toISOString(), description: 'createdAt' })
  @Prop()
  createdAt: Date;


  @ApiProperty({ example: new Date().toISOString(), description: 'updatedAt' })
  @Prop()
  updatedAt: Date;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
