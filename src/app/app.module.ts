import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './products/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
@NgModule({
  // deben ir directivas, componentes o paips
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent,
    NotFoundComponent,
    DetailsProductComponent,
    ProductListComponent,
  ],
  //  modulos que instalo de terceros
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
   // deben los service que se utilizaran en la aplicación
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
