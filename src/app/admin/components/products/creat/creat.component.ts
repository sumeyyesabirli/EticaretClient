import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-creat',
  templateUrl: './creat.component.html',
  styleUrls: ['./creat.component.scss']
})
export class CreatComponent extends BaseComponent implements OnInit {

  constructor(spiner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spiner)
  }

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallAtom)

    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message("Lütfen Adını Giriniz.", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
      });
      return;

    }

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallAtom)
      this.alertify.message("Ürün Başarılı Olarak eklendi.", {
        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight

      })
    }, errorMessage => {
      this.alertify.message(errorMessage, {

        dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight

      });

    });


  }

}
