import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurdserviceService {


  private heroesUrl = 'api/heroes';
  private fetechDataById = 'api/heroes'
  private addUserUrl = 'api/heroes'
  private updateUrl = 'api/heroes'
  private deleteUrl = 'api/heroes'
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  getSelecetedData(id: number): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl + '/' + id)
  }

  addUser(user: Hero): Observable<Hero> {
    user.id = null;
    return this.http.post<Hero>(this.addUserUrl, user).pipe(
      tap(data => data)
    );
  }

  updateUser(user: Hero): Observable<Hero>{
    const url = `${this.updateUrl}/${user.id}`;
    return this.http.put<Hero>(this.updateUrl, user).pipe(
      map(() => user)
    );
  }

  deleteUser (id: number): Observable<Hero> {
    const url = `${this.deleteUrl}/${id}`;
    return this.http.delete<Hero>(url).pipe(
      catchError(this.handleError)
    );
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Hero, any> {
    throw new Error("Method not implemented.");
  }

  /**
   * @description get the Age based on date of birth
   */
  getAge(dateOfBirth: any) {
    console.log(dateOfBirth,'============')
    const today = new Date();
    const birthDate = new Date("1992/08/12");
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if(m < 0 || (m == 0 && today.getDate() < birthDate.getDate())){
      age--;
    }
    return age;
  }

}
