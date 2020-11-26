import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id: 1,
      name: 'Huevo',
      category: 'Food',
      description: 'Lorem egg',
      price: 3
    },
    {
      id: 2,
      name: 'Coca cola',
      category: 'Drink',
      description: 'Lorem Drink',
      price: 30
    },
    {
      id: 3,
      name: 'Biscoff Cookies',
      category: 'Food',
      description: 'Lorem Cookie',
      price: 10
    }
  ];


  // creo un metodo que devulta el array products
  getAllProduct(){
    return this.products;
  }


  getProductById( id: string | number | null ) {
    // devuelvo un array
    return this.products.filter((product ) => product.id == id);
  }
}
