import { Location } from '@angular/common';
import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/DataModels/iproduct';
import { ProductServiceService } from 'src/app/Services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit 
{

  productId:number=0;
  product:IProduct|null=null;

  constructor(
              private activatedRoute:ActivatedRoute,
              private locationService: Location,
              private productsService:ProductServiceService) 
  {

  }

  ngOnInit() 
  {
    this.productId=Number(this.activatedRoute.snapshot.paramMap.get("productId"));

    this.product=this.productsService.getProductById(this.productId);
  }

  goBack()
  {
    this.locationService.back();
  }

}
