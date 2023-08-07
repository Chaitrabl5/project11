import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

const routes: Routes = [

{path:'login',component:ProductsListComponent,
title:'login'},

{path:'products',component:ProductsListComponent,
title:'ProductList'},

{path:'products/:id',component:ProductDetailsComponent,
title:'ProductList'},

{path:'products/:id/edit',component:ProductsListComponent,
title:'ProductList'},

{path:'welcome',component:ProductsListComponent,
title:'Welcome'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
