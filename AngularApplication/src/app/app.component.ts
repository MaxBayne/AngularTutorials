import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>Iam Max Bayne</h1>',
  styleUrls: ['./app.component.css'],
  //styles:['h1{color:red}']
})
export class AppComponent 
{
  //Define Properites ---------------------------
  title = 'AngularApplication';

  //Define Functions ----------------------------
  printMessage():string
  {
    return 'Hello World , '+ this.title;
  }

}
