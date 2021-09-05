import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CowsService {

  // ultimately this function should retrieve list of cows from a database
  getCows() {
    return [{id: 1, name: 'Marv', description: 'Big cow with lots of personality'}, {id: 2, name: 'Peet', description: 'Very hyper cow'}]
  }
}
