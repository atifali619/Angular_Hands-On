import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'One';

  feature:string = 'recipes';
  selectedPage(selectedPage:string){
    this.feature = selectedPage;
  }
}
