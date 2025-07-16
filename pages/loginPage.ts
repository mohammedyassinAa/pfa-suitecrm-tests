import { Page } from '@playwright/test';
import { LoginObjects } from '../objects/loginObjects';

export class LoginPage {
  readonly loginObjects: LoginObjects;

  constructor(page: Page) {
    this.loginObjects = new LoginObjects(page);
  }

  async goto() {
    await this.loginObjects.page.goto('http://localhost:18080/suitecrm'); // or your test URL
  }

  async login(username: string, user_password: string) {
    await this.loginObjects.usernameInput.fill(username);
    await this.loginObjects.passwordInput.fill(user_password);
    await this.loginObjects.loginButton.click();
  }
}
