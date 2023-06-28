import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

login(): Observable<any>{
  const url = 'https://reqres.in/api/login';
  // const headers= new HttpHeaders()
  // .set('content-type', 'application/json')
  // .set('Access-Control-Allow-Origin', '*');
  let body = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
  return this.http.post(url, body).pipe(
    map(response => response)
  );
}

getUserData(): Observable<any>{

const url =  'https://reqres.in/api/users?page=1';

  return this.http.get(url).pipe(
    map(response => response)
  );
}
 
}
