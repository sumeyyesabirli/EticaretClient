import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    
    this.httpClientService.get<Product[]>({
      controller:"products"

    }).subscribe(data=> console.log(data));

    /*this.httpClientService.post({
         controller: "products"
     }, {
        name: "Kalem",
        stock: 100,
        price: 15
     }).subscribe();

      this.httpClientService.put({
         controller: "products"
     }, {
        id:"55d9e354-9363-42e7-96c9-d66d38a2e3bf",
        name:"deneme",
        stock:1,
        price:1
     }).subscribe();

     this.httpClientService.delete({
      controller: "products"}, 
     "55d9e354-9363-42e7-96c9-d66d38a2e3bf",).subscribe();*/

     this.httpClientService.get({
        fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
     }).subscribe(data => console.log(data));
   

    
  }

}
