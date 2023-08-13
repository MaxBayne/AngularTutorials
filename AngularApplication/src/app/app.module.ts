import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';


import { LightBoxDirective } from './Directives/light-box.directive';
import { USDToEGPPipe } from './Pipes/usdto-egp.pipe';
import { CategoriesDropDownListComponent } from './Components/categories/categoriesList/categories-drop-down-list/categories-drop-down-list.component';
import { ProductsGridComponent } from './Components/products/products-grid/products-grid.component';
import { ProductsViewComponent } from './Components/products/products-view/products-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    LightBoxDirective,
    USDToEGPPipe,
    CategoriesDropDownListComponent,
    ProductsGridComponent,
    ProductsViewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
