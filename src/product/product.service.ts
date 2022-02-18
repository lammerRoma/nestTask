import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { saveProductDto } from './dto/saveProduct.dto';
import { Product, ProductDocument } from './schemas/product.schemas';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async saveProduct(dto: saveProductDto) {

        if (await this.isIndexName(dto.name)) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'This name already exist',
              }, HttpStatus.BAD_REQUEST);

        } else {
            const createdProduct = new this.productModel(dto);
            return createdProduct.save();
        }
        
    }

    private async isIndexName(name: string): Promise<boolean> {
        const names = await this.productModel.find( {name} );

        for (let name of names) {
            if(name.index) return true
        }
        
        return false
    }
}
