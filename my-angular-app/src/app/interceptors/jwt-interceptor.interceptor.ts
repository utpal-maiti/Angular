import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'Bearer my-auth-token';
    const authReq = req.clone({
      setHeaders: { Authorization: authToken }
    });
    return next.handle(authReq).pipe(
      tap(event => {
        // Handle the response or error
      })
    );
  }
}