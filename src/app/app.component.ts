import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['a', 'p', 'p', ' ', 'w', 'o', 'r', 'k', 's','!'];

  clickHandler(){
    console.log(this.title.join().split(',').join(''))
  }

  inputHandler(e){
    var index = parseInt(e.target.getAttribute('name'));
    // debugger
    this.title[index] = e.target.value
  }
}
