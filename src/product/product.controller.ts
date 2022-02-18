import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import { saveProductDto } from './dto/saveProduct.dto';
import { Product } from './schemas/product.schemas';
import { ValidationPipe } from "../pipes/validation.pipe";

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @ApiOperation({summary: 'Write some data to DB'})
    @ApiResponse({status: 200, type: Product})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() productDto: saveProductDto) {
        return this.productService.saveProduct(productDto)
    }
}
