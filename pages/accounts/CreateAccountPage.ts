import { CreateAccountObjects } from '../../objects/accounts/CreateAccountObjects';
import { expect } from '@playwright/test';

export class CreateAccountPage {
  readonly objects: CreateAccountObjects;

  constructor(objects: CreateAccountObjects) {
    this.objects = objects;
  }

  async navigateToCreateAccount() {
    // Click "Sales" dropdown first if needed
    await this.objects.salesDropdown.click(); // You’ll need to add this locator in objects file
    await this.objects.accountsTab.click();
    await this.objects.createAccountLink.click();
    await this.objects.createHeading.waitFor({ timeout: 10000 });
  }
  

  async fillAndSubmitForm(name: string, website: string, email: string) {
    await this.objects.nameInput.fill(name);
    await this.objects.websiteInput.fill(website);
    await this.objects.emailInput.fill(email);
    await this.objects.saveButton.first().click();
  }

  async verifyAccountCreated(name: string) {
    await expect(this.objects.successMessage).toContainText(name);
  }
}
