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
 
  constructor( ) {
    
  }
}

