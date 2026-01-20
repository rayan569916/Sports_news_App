import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, tap, EMPTY } from 'rxjs';
import { config } from './config';
import { AuthResponse } from '../features/interface';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class Nba {
  private balldontlieBaseUrl = config.balldontlie;
  private wikipediaBaseUrl = config.wikipedia;
  private apiBaseUrl = `${config.apiBaseUrl}`;

  private authToken = "b096bbb1-b477-4fa7-a194-21304fbaeeaa";

  private balldontlieHeader = new HttpHeaders({
    'Authorization': this.authToken
  })

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  getPlayerDetails(): Observable<any> {
    const headers = this.balldontlieHeader;
    return this.http.get(`${this.balldontlieBaseUrl}/v1/players`, { headers });
  }

  getPlayerSummaryFromWikipedia(player: string): Observable<any> {
    return this.http.get(`${this.wikipediaBaseUrl}/summary/${player}`);
  }

  getPlayerMediaListFromWikipedia(player: string): Observable<any> {
    return this.http.get(`${this.wikipediaBaseUrl}/media-list/${encodeURIComponent(player)}`);
  }

  loginFlaskAPI(payload: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/auth/login`, payload).pipe(
      tap((res: AuthResponse) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('accessToken', res.access_token);
          localStorage.setItem('refreshToken', res.refresh_token);
        }
      })
    );
  }

  signupFlaskAPI(payload: { email: string, password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiBaseUrl}/auth/signup`, payload)
      .pipe(tap((res: AuthResponse) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('accessToken', res.access_token);
          localStorage.setItem('refreshToken', res.refresh_token);
        }
      }));
  }

  refreshAPI(): Observable<any> {
    let token = '';
    if (isPlatformBrowser(this.platformId)) {
      token = localStorage.getItem('refreshToken') || '';
    }
    return this.http.post(`${this.apiBaseUrl}/auth/refresh`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getNbaSummary(): Observable<any> {
    if (isPlatformBrowser(this.platformId)) {
      return this.http.get(`${this.apiBaseUrl}/nba/nba_summary`)
    }
    return EMPTY;
  }
}