import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from 'src/app/admin/components/dashboard/dashboard.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    HomeComponent,
    DashboardComponent,
  ]
})
export class ComponentsModule { }
