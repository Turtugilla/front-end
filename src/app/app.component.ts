import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'front-end';

  ngOnInit() {
    sessionStorage.setItem('currentPage', '1');
    console.log('Entre a AppComponent.ts')
  }
}
