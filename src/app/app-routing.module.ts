import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// todo: importo los componentes
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  // creo las rutas
  {path: '', component: HomePageComponent},
  {path: 'product', component: ProductListComponent},
  {path: 'product/:id', component: DetailsProductComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
