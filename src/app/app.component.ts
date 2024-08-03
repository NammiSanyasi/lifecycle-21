import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle';

  c=0;
  inc(){
    this.c++;
  }

  constructor(){
    console.log('app constructor called');
  }
}
