import { browser, by, element } from 'protractor';

describe('Login Page', () => {
  beforeEach(() => {
    browser.get('/login');
  });

  it('should display the login form', () => {
    expect(element(by.css('form')).isPresent()).toBe(true);
    cy.fixture('loginData').then((data) => {
      cy.get('input[name="username"]').type(data.username);
      cy.get('input[name="password"]').type(data.password);
    });
  });

  it('should login with valid credentials', () => {
    element(by.css('input[name="username"]')).sendKeys('testuser');
    element(by.css('input[name="password"]')).sendKeys('password123');
    element(by.css('button[type="submit"]')).click();
    
    expect(browser.getCurrentUrl()).toBe('/dashboard');
  });
});