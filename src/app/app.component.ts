import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  let person = { fname:"mani ",lname :"kandan ",
  fullname : function () {
    return this.person.fname + " " + this.person.lname; }
 consle.log(fullname );
  };
}
