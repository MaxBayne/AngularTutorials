import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CategoriesDropDownListComponent } from '../../categories/categoriesList/categories-drop-down-list/categories-drop-down-list.component';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements AfterViewInit
{

  //Define Properites ---------------------------
  currentSelectedCategoryId:number;

  @ViewChild(CategoriesDropDownListComponent) 
  cboCategories!:CategoriesDropDownListComponent;

  constructor()
  {
    this.currentSelectedCategoryId=-1;
  }

  ngAfterViewInit(): void 
  {
    //here u can set initial value for child componenet as childview
    this.cboCategories.selectedCategoryId=-1;
  }
  
  //Define Functions ----------------------------
  
  OnCategoryChanged(categoryId:number):void
  {
    this.currentSelectedCategoryId=categoryId;
  }


}
