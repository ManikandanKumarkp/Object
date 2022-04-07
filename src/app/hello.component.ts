import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <p id="demo"></p>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
const  cars =new Array ["valvo","version","dob"];
document.getbyelmentid("demo").innerhtml = cars;
}
