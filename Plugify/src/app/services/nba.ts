import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root',
})
export class Nba {
  private balldontlieBaseUrl =config.balldontlie;
  private wikipediaBaseUrl =config.wikipedia;

  private authToken="b096bbb1-b477-4fa7-a194-21304fbaeeaa";

  private balldontlieHeader = new HttpHeaders({
    'Authorization':this.authToken
  })

  constructor(private http: HttpClient) {}

  getPlayerDetails(): Observable<any>{
    const headers=this.balldontlieHeader
    return this.http.get(`${this.balldontlieBaseUrl}/v1/players`,{ headers })
  }

  getPlayerSummaryFromWikipedia(player:string): Observable<any>{
    return this.http.get(`${this.wikipediaBaseUrl}/summary/${player}`);
  }

  getPlayerMediaListFromWikipedia(player:string): Observable<any>{
    return this.http.get(`${this.wikipediaBaseUrl}/media-list/${encodeURIComponent(player)}`)
  }

  getPlayerMobileSectionsFromWikipedia(player:string): Observable<any>{
    return this.http.get(`${this.wikipediaBaseUrl}/mobile-sections/${encodeURIComponent(player)}`)
  }
}


// /media-list
