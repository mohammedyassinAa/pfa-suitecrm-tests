import { Page, Locator } from '@playwright/test';

export class LoginObjects {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="user_name"]');
    this.passwordInput = page.locator('input#username_password');
    this.loginButton = page.locator('button[type="submit"], input[type="submit"]');  }
}
