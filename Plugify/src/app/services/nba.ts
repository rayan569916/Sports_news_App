import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Nba {
  private baseUrl =
    'https://api.balldontlie.io';

  private authToken="b096bbb1-b477-4fa7-a194-21304fbaeeaa";

  private header = new HttpHeaders({
    'Authorization':this.authToken
  })

  constructor(private http: HttpClient) {}

  getPlayerDetails(): Observable<any>{
    const headers=this.header
    return this.http.get(`${this.baseUrl}/v1/players`,{ headers })
  }
}
