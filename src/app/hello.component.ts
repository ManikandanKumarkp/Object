import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <p id="demo"></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
}
