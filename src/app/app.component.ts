import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
  private heroes: Hero[];

  private heroesUrl = 'api/heroes';
  title = 'practise';
  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getHeroes().subscribe(
      data => this.heroes = data
    )
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  
}
