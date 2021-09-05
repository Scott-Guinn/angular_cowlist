import { Component, OnInit, Input } from '@angular/core';

interface Cow {
  id: number,
  name: string,
  description: string,
}

@Component({
  selector: 'app-cow',
  template: `
    <li>
      <div> Name: {{ cow.name }} </div>
      <div> Description: {{ cow.description }} </div>
    </li>
  `,
  styleUrls: ['./cow.component.css']
})
export class CowComponent {
  constructor() {
    this.cow = {id: 0, name: '', description: ''}
  }
  @Input() cow: Cow;
}
