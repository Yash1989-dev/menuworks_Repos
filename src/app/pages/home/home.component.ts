import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchKeys = [
    {name: 'Keyword', id: 1, value: 'keyword'},
    {name: 'Match Phrase Only', id: 2, value: 'matchPhrase'},
    {name: 'Recipe Number', id: 3, value: 'recipeNumber'},
  ];

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('/ui/api/team/1/ProductSets', {
      headers : {
        'content-type': 'application/json',
        'Authorization': 'Bearer AT-8754-KkGIohqesKV7-hUY3KlVvJw8N-tnIa7O'
      }
    }).subscribe((res)=>{
      console.log(res);
    })
  }
}
