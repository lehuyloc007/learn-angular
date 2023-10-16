import { Component } from '@angular/core';

@Component({
  selector: 'app-data-and-event-binding',
  templateUrl: './data-and-event-binding.component.html',
  styleUrls: ['./data-and-event-binding.component.css']
})
export class DataAndEventBindingComponent {
  //user la 1 cai bien
  user = {
    name: 'Loc',
    age: 27
  }
  handler() {
    console.log('click')
  }
}
