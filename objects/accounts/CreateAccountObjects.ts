import { Page, Locator } from '@playwright/test';

export class CreateAccountObjects {
    readonly accountsTab: Locator;
    readonly createAccountLink: Locator;
    readonly createHeading: Locator;
    readonly nameInput: Locator;
    readonly websiteInput: Locator;
    readonly emailInput: Locator;
    readonly saveButton: Locator;
    readonly successMessage: Locator;
    readonly salesDropdown: Locator;

constructor(page: Page) {
    this.salesDropdown = page.locator('#grouptab_0'); 
    this.accountsTab = page.getByRole('link', { name: /Accounts/i });
    this.createAccountLink = page.getByRole('link', { name: /Create Account/i });
    this.createHeading = page.locator('h2.module-title-text:has-text("CREATE")');
    this.nameInput = page.locator('input[name="name"]');
    this.websiteInput = page.locator('input[name="website"]');
    // BY id 
    this.emailInput = page.locator('#Accounts0emailAddress0');
    this.saveButton = page.locator('#SAVE');
    this.successMessage = page.locator('h2.module-title-text');
}
}
