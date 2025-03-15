import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'my-angular-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-angular-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-angular-app');
  });
});

describe('MyComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
  	await TestBed.configureTestingModule({
  		declarations: [AppComponent],
  	}).compileComponents();
  });

  beforeEach(() => {
  	fixture = TestBed.createComponent(AppComponent);
  	component = fixture.componentInstance;
  	fixture.detectChanges();
  });

  it('should create', () => {
  	expect(component).toBeTruthy();
  });
});

// describe('My App', () => {
//   it('should display welcome message', () => {
//   	cy.visit('/');
//   	cy.contains('Welcome to My App!');
//   });
// });
