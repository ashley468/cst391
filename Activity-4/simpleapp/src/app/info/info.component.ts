import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  quantity: number = 0;
  selectedProduct: string = 'Star Wars';
  products: string[] = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];

  newInfo() {
    this.quantity = 0;
    this.selectedProduct = 'Star Wars';
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    console.log("In newInfo() and resetting info");
  }

  onSubmit() {
    console.log("In onSubmit() with quantity of " + this.quantity + " and movie selected is " + this.selectedProduct);
  }
}
