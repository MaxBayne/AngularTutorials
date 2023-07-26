import { Component } from '@angular/core';
import { StoresData } from 'src/app/ViewModels/stores-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent 
{
  storesInfo:StoresData;
  showImage:boolean;

  constructor()
  {
    this.storesInfo=new StoresData("store-A","https://picsum.photos/200/300",["cairo","benha","egypt"]);
    this.showImage=true;
  }

  toggleImage()
  {
    this.showImage=!this.showImage;
  }


}
