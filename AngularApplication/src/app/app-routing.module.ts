import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsViewComponent } from './Components/products/products-view/products-view.component';
import { ProductDetailComponent } from './Components/products/product-detail/product-detail.component';

const routes: Routes = 
[
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsViewComponent},
  {path:'products/:productId',component:ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
