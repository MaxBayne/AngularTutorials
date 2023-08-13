import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICategory } from 'src/app/DataModels/icategory';

@Component({
  selector: 'app-categories-drop-down-list',
  templateUrl: './categories-drop-down-list.component.html',
  styleUrls: ['./categories-drop-down-list.component.css']
})
export class CategoriesDropDownListComponent 
{
  @Output()
  CategoryChangedEvent:EventEmitter<number>;
  
  selectedCategoryId:number;
  categories:ICategory[];

 



  

  constructor()
  {
    this.CategoryChangedEvent=new EventEmitter();
    
    this.selectedCategoryId=0;
    this.categories=
    [
      {Id:1,Name:"Category 1",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true},
      {Id:2,Name:"Category 2",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true},
      {Id:3,Name:"Category 3",ImgUrl:"https://fakeimg.pl/200x100/",CanUse:true}
    ];


  }

  OnCategoryChanged(categoryId:any)
  {
    this.CategoryChangedEvent.emit(categoryId);
    this.selectedCategoryId=categoryId;
  }
 
}
