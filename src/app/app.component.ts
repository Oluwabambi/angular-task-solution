import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textIsShown: boolean = true;
  currentClasses: any = {}
  ngOnInit() {
    this.setCurrentClasses();
  }
  title = 'angular-assignment-solution';
  items = [
    {id: 1, name: 'John', gender: 'male'},
    {id: 2, name: 'Mary', gender: 'female'},
    {id: 3, name: 'Peter', gender: 'male'},
    {id: 4, name: 'Moses', gender: 'male'},
    {id: 5, name: 'Rebecca', gender: 'female'},
  ]

  setCurrentClasses() {
    this.currentClasses = {
      fem: true
    }
  }

  toggleTextShow() {
    this.textIsShown = !this.textIsShown;
  }
}
