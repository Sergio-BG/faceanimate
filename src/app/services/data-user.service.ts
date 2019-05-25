import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(3000)
      );
  }
}
