import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  question = 'What is your name?';
  answer = 'unkown';

  appForm = new FormGroup({
    answer: new FormControl(''),
  });

  onSubmit(data: Partial<{ answer: string | null }>)
  {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  }

}
