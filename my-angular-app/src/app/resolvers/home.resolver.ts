import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

export const homeResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};


@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<any> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    return of({ data: 'Resolved Data' }); // Replace with real data fetching logic
  }
}