import { Component, OnInit } from '@angular/core';
import { CowComponent } from '../cow/cow.component';
import { CowsService } from '../cows.service';

interface Cow {
  id: number,
  name: string,
  description: string,
}

@Component({
  selector: 'app-cowlist',
  template: `
    <ul>
      <app-cow *ngFor='let c of cows' [cow]='c'></app-cow>
    </ul>
  `,
  styleUrls: ['./cowlist.component.css']
})

export class CowlistComponent implements OnInit {
  cows: Cow[];

  constructor(service: CowsService) {
    this.cows = service.getCows()
   }

  ngOnInit(): void {
  }

}
