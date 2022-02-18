import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';

export class saveProductDto {
    @ApiProperty( {example: 'Atlas', description: 'Some product name'})
    @IsString({message: 'field must be of type string'})
    readonly name: string

    @ApiProperty( {example: 'true', description: 'Should the name be unique on DB?'})
    @IsBoolean({message: 'field must be of type boolean'})
    readonly index: boolean

    @ApiProperty( {example: 'An integrated suite of cloud database and... ', description: 'Description a product'})
    @IsString({message: 'field must be of type string'})
    readonly description?: string
 }