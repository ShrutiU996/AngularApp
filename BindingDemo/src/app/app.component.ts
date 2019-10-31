import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-first-app';
  firstName: string = 'shruti'; //interpolation
  val: string = 'Demo';

}
