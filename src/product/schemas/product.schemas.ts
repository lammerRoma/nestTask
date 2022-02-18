import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;


@Schema({ versionKey: false })
export class Product {
  @ApiProperty( {example: 'Atlas', description: 'MongoDB Atlas'})
  @Prop({ required: true })
  name: string;

  @ApiProperty( {example: 'true', description: 'If true `name` well be uniq on DB'})
  @Prop({ default: false })
  index: boolean;

  @ApiProperty( {example: 'An integrated suite of...', description: 'Product description'})
  @Prop({ default: '' })
  description: string;

  @ApiProperty( {example: '2022-02-18T07:22:37.886Z', description: 'Time created'})
  @Prop({ default: Date.now() })
  createdAT: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);