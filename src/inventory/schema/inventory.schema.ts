import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema({ timestamps: true })
export class Inventory {

  @ApiProperty({ example: "codigo_producto", description: 'The code of the product' })
  @Prop()
  codigo_producto: string;

  @ApiProperty({ example: "descripcion", description: 'The description of the product' })
  @Prop()
  descripcion: string;

  @ApiProperty({ example: "lote", description: 'The lot of the product' })
  @Prop()
  lote: string;

  @ApiProperty({ example: 0, description: 'The actual stock of the product' })
  @Prop({ default: 0 })
  stock_actual: number;

  @ApiProperty({ example: 0, description: 'The entries of the product' })
  @Prop()
  entradas: number;

  @ApiProperty({ example: 0, description: 'The exits of the product' })
  @Prop()
  salidas: number;

  @ApiProperty({ example: 0, description: 'The stock of the product' })
  @Prop()
  precio_entrada: number;

  @ApiProperty({ example: 0, description: 'The price of the product' })
  @Prop()
  precio_salida: number;

  @ApiProperty({ example: new Date().toISOString(), description: 'The expiration date of the product' })
  @Prop()
  fecha_expiracion: Date;

  @ApiProperty({ example: 0, description: 'The import of the product' })
  @Prop({ default: 0 })
  importe: number; // se calcula el costo unitario por el stock actual


  @ApiProperty({ example: new Date().toISOString(), description: 'The creation date of the product' })
  @Prop()
  createdAt: Date;

  @ApiProperty({ example: new Date().toISOString(), description: 'The update date of the product' })
  @Prop()
  updatedAt: Date;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
