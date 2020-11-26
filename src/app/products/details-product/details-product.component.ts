import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../../shared/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})

export class DetailsProductComponent implements OnInit {

  public product: any = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
    ) { }

  ngOnInit(): void {

    // todo: obtengo el id que viene en el url (recupero)
    const productId = this.route.snapshot.paramMap.get('id');

    // le paso el parametro de productId y se lo mando el metodo de Service.ts
    [this.product] =  this.product =  this.dataService.getProductById(productId);

    // console.log('productID: ', productId);
  }


  // metodo
  onGoBack(): void{
    this.location.back();
  }
}
