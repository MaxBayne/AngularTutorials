import { Component } from '@angular/core';
import { ICategory } from 'src/app/DataModels/icategory';
import { IProduct } from 'src/app/DataModels/iproduct';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent 
{
  categories:ICategory[]
  products:IProduct[]

  selectedCategoryId:number;

  constructor()
  {
    this.selectedCategoryId=1;
    
    this.categories=
    [
      {Id:1,Name:"Category 1",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true},
      {Id:2,Name:"Category 2",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true},
      {Id:3,Name:"Category 3",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true}
    ]


    this.products=
    [
      { Id:100,Name:"Item A",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:5,UnitPrice:100,CategoryId:1},
      { Id:200,Name:"Item B",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:3,UnitPrice:140,CategoryId:1},
      { Id:300,Name:"Item C",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:2,UnitPrice:180,CategoryId:1},
      { Id:400,Name:"Item D",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:1,UnitPrice:190,CategoryId:2},
      { Id:500,Name:"Item E",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:0,UnitPrice:200,CategoryId:2},
      { Id:600,Name:"Item F",ImgUrl:"https://fakeimg.pl/200x100/",Quantity:4,UnitPrice:500,CategoryId:3}
    ]

  }

  buy(productId:number,unitPrice:number,count:any)
  {

  }

  changeCategory(categoryId:any)
  {
    this.selectedCategoryId=categoryId as number;

  }

}
