import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-caluclator',
  imports: [FormsModule],
  templateUrl: './caluclator.html',
  styleUrl: './caluclator.css'
})
export class Caluclator {
  num1 : number = 0;
  num2 : number = 0;
  result : number = 0;
  add() {
    debugger;
    this.result = this.num1 + this.num2;
  }
  subtract() {
    this.result = this.num1 - this.num2;
  }
  multiply() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = this.num1 / this.num2;
  }

}
