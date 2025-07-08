import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('http://localhost:18080/suitecrm');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[name="user_name"]', username);
        await this.page.fill('input[name="username_password"]', password);
        await this.page.click('input[type="submit"]');
    }
}
