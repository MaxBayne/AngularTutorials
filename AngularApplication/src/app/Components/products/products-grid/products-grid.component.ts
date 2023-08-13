import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICategory } from 'src/app/DataModels/icategory';
import { IProduct } from 'src/app/DataModels/iproduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-products-Grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent  implements OnChanges
{
  @Input()
  selectedCategoryId:number=-1;
  
  products:IProduct[]=[];

  constructor(private productsService:ProductServiceService,
              private routerService:Router)
  {

    

  }
  
  //fire on any inputs changed
  ngOnChanges(changes: SimpleChanges): void 
  {
    this.products=this.productsService.getProductsByCategoryId(this.selectedCategoryId);
  }


  buy(productId:number,unitPrice:number,count:any):void
  {

  }

  
  goToDetails(productId:number):void
  {
    this.routerService.navigate(['products',productId]);
  }

  


}
