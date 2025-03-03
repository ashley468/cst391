import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() name: string = '';

  quantity: number = 1;
  products: string[] = ['Laptop', 'Phone', 'Tablet'];
  selectedProduct: string = this.products[0];

  onSubmit() {
    console.log(`Order placed: ${this.quantity} x ${this.selectedProduct}`);
  }

  newInfo() {
    this.quantity = 1;
    this.selectedProduct = this.products[0];
  }
}
