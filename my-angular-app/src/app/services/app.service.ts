import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, combineLatest, forkJoin, map, Observable, of, Subject, take, takeUntil, throwError } from 'rxjs';
import { User, Order } from '../models/interfaces/icart.class';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private data: string[] = ['Item1', 'Item2', 'Item3'];
  constructor(
    private http: HttpClient,
    @Inject('MY_TOKEN') private myDependency: any
  ) {}

  getData(): string[] {
    return this.data;
  }

  addItem(item: string) {
    this.data.push(item);
  } 

  getDataApi(): Observable<any> {
    return this.http.get('https://api.example.com/data').pipe(
      catchError(error => {
        // Handle the error
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }
  addData(data: any): Observable<any> {
    return this.http.post('https://api.example.com/data', data);
  }
  updateData(id: string, data: any): Observable<any> {
    return this.http.put(`https://api.example.com/data/${id}`, data);
  }
  deleteData(id: string): Observable<any> {
    return this.http.delete(`https://api.example.com/data/${id}`);
  }
  observableOf(){
    const observable = of(1, 2, 3);
    const subscription = observable.subscribe(value => console.log(value));
    const transformedObservable = observable.pipe(
      map(value => value * 2)
    );
    transformedObservable.subscribe(value => console.log(value));
    subscription.unsubscribe();

    const obs1 = of('A');
    const obs2 = of('B');

    combineLatest([obs1, obs2]).subscribe(([val1, val2]) => {
      console.log(val1, val2); // Outputs 'A B'
    });

    this.http.get('https://api.example.com/data').pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
    ).subscribe();

    const destroy$ = new Subject<void>();

    this.http.get('https://api.example.com/data').pipe(
      takeUntil(destroy$)
    ).subscribe();

    // Trigger this when you want to unsubscribe
    destroy$.next();
    destroy$.complete();
  }
  private stateSubject = new BehaviorSubject<any>({});
  state$: Observable<any> = this.stateSubject.asObservable();

  setState(newState: any) {
    this.stateSubject.next(newState);
  }

  getState(): any {
    return this.stateSubject.getValue();
  }
  getUserDetails(): Observable<User> {
    return this.http.get<User>('/api/user-details');
  }
  
  getUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/user-orders');
  }
  
  getUserOrdersAll(){
    forkJoin({
      userDetails: this.getUserDetails(),
      userOrders: this.getUserOrders()
    }).subscribe({
      next: (results) => {
        console.log(results.userDetails);
        console.log(results.userOrders);
      },
      error: (err) => {
        console.error('Failed to fetch data', err);
      }
    });
  }
  
  Completing(){
    forkJoin({
      userDetails: this.getUserDetails().pipe(take(1)),
      userOrders: this.getUserOrders().pipe(take(1))
    }).subscribe({
      next: (results) => {
        console.log(results.userDetails);
        console.log(results.userOrders);
        // Process results
      },
      error: (err) => {
        console.error('Failed to fetch data', err);
      }
    });
  }
  
  Combining(){
    
    forkJoin({
      userDetails: this.getUserDetails(),
      isLoggedIn: this.isLoggedIn(),
      config: this.getAppConfig()
    }).subscribe(results => {
      // Results is an object containing values from all three observables
    });
  }

  getAppConfig(): any {
    return {};
  }
  
  isLoggedIn(): any {
    return true;
  }

  demonstrateSignals(){
    // Define a signal with an initial value
    const count = signal(0);

    // Read the value of the signal
    console.log(count); // Outputs: 0

    // Update the value of the signal
    count.set(1);
    console.log(count); // Outputs: 1
  } 
  DependencyTracking(){
    const firstName = signal('John');
    const lastName = signal('Doe');

    // Define a computed signal that depends on firstName and lastName
    const fullName = signal(() => `${firstName} ${lastName}`);

    console.log(fullName); // Outputs: John Doe

    // Update firstName and fullName is automatically updated
    firstName.set('Jane');
    console.log(fullName); // Outputs: Jane Doe
  }

}

