import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsRoutingModule } from './products-routing.module';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    DropdownModule,
    FormsModule,
    PanelModule,
    CardModule,
    DividerModule,
    ButtonModule // Assuming ButtonModule is 
]
})
export class ProductsModule { }
