import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerToastrService, ToastrMessageType, ToastrPosition } from './services/ui/customer-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EticaretClient';
 
  constructor(private toastrService: CustomerToastrService) {
    toastrService.message("Mehaba","Deneme", {messageType: ToastrMessageType.Info,
      position: ToastrPosition.BottomCenter});
    toastrService.message("Mehaba","Deneme", {messageType:  ToastrMessageType.Error, position: ToastrPosition.BottomFullWidth});
    toastrService.message("Mehaba","Deneme", {messageType: ToastrMessageType.Warning, position: ToastrPosition.BottomLeft});
    toastrService.message("Mehaba","Deneme", {messageType:  ToastrMessageType.Success, position: ToastrPosition.TopLeft});

  }
}

