import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  coins = [
    { id: 1, name: 'BTC' },
    { id: 2, name: 'XRP' }
  ];


  constructor(private testservice: TestService) { }

  getMyItems() {
    return this.coins;
  }
}
