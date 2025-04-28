import { Component } from '@angular/core';

@Component({
  selector: 'app-ingredients2',
  templateUrl: './ingredients2.component.html',
  styleUrls: ['./ingredients2.component.scss']
})
export class Ingredients2Component {
  public subMenus = [
    {name: 'Search', id: 1, link: './search'},
    {name: 'Search3', id: 1, link: './search3'},
  ];
}
