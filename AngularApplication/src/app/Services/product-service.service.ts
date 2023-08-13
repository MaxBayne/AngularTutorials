import { Injectable } from '@angular/core';
import { IProduct } from '../DataModels/iproduct';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root' //make service as singleton over all modules
  //providedIn: AppModule //make service as singleton over custom module [AppModule]
  //providedIn: 'any' //make singleton only with eager modules like (AppModule) that run on app start from main.ts , but the lazy modules like [ProductsModule] will create new instance with every module mean no shared singleton between lazy modules
})
export class ProductServiceService {

  private productsList:IProduct[]=[];

  constructor() 
  {

    this.productsList=
    [
      { Id:100,Name:"Item A",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:5,UnitPrice:100,CategoryId:1},
      { Id:200,Name:"Item B",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:3,UnitPrice:140,CategoryId:1},
      { Id:300,Name:"Item C",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:2,UnitPrice:180,CategoryId:1},
      { Id:400,Name:"Item D",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:1,UnitPrice:190,CategoryId:2},
      { Id:500,Name:"Item E",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:0,UnitPrice:200,CategoryId:2},
      { Id:600,Name:"Item F",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:4,UnitPrice:500,CategoryId:3},
      { Id:700,Name:"Item G",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:-1,UnitPrice:250,CategoryId:1}
    ]
  }

  getProducts():IProduct[]
  {
    return this.productsList;
  }

  getProductsByCategoryId(categoryId:number):IProduct[]
  {
    if(categoryId == 0 || categoryId == -1)
    {
      return this.productsList;
    }
    else
    {
      return this.productsList.filter(product=>product.CategoryId==categoryId);
    }


  }

  getProductById(productId:number):IProduct|null
  {
    let productFound = this.productsList.find(c=>c.Id==productId);

    if(productFound)
    {
      return productFound;
    }
    else
    {
      return null;
    }
  }
}
