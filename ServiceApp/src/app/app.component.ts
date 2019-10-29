import { Component } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'servicedemo';
  coins:any = [];

  constructor(public testservice: TestService )
  {
    this.coins = testservice.getMyItems();
  }
}
