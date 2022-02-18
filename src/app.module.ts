import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { ProductModule } from './product/product.module';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot( {
            envFilePath: './config.env'
        }),
        MongooseModule.forRoot(process.env.DATABASE),
        ProductModule,
    ]
})
export class AppModule{}