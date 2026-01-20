import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Nba } from './services/nba'
import { catchError, switchMap, throwError } from "rxjs";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private isRefreshing = false;
    constructor(private service: Nba, @Inject(PLATFORM_ID) private platformId: Object) { }

    intercept(request: HttpRequest<any>, handler: HttpHandler) {

        // 🚫 Do not intercept refresh token API
        if (request.url.includes("/auth/refresh")) {
            return handler.handle(request);
        }

        let token = null;
        if (isPlatformBrowser(this.platformId)) {
            token = localStorage.getItem('accessToken');
        }

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            })
        }

        return handler.handle(request).pipe(
            catchError((res: HttpErrorResponse) => {
                if (res.status === 401 && res.error?.error === 'TOKEN_EXPIRED' && !this.isRefreshing) {
                    return this.service.refreshAPI().pipe(
                        switchMap(res => {
                            if (isPlatformBrowser(this.platformId)) {
                                localStorage.setItem('accessToken', res.access_token)
                                this.isRefreshing = true;
                            }

                            const retryReq = request.clone({
                                setHeaders: {
                                    Authorization: `Bearer ${res.access_token}`
                                }
                            })
                            return handler.handle(retryReq);
                        }),
                        catchError((err) => {
                            this.isRefreshing = true;
                            return throwError(() => err);
                        })
                    )
                }
                return throwError(() => res);
            }
            )
        )
    }

}