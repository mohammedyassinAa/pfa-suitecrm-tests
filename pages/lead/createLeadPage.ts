import { expect, Page } from '@playwright/test';
import { CreateLeadObjects } from '../../objects/lead/createLeadObjects';

export class CreateLeadPage {
  readonly leadObjects: CreateLeadObjects;

  constructor(page : Page) {
    this.leadObjects = new CreateLeadObjects(page);
  }

  async navigateToLeads() {
    await this.leadObjects.salesDropdown.click();
    await this.leadObjects.leadsLink.click();
    await this.leadObjects.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
  }

  async clickCreateLead() {
    await this.leadObjects.createLeadItem.click();
  }

  async createLead(firstName: string, lastName: string, phone: string, email: string) {
    await this.leadObjects.salutationDropdown.selectOption({ label: 'Mr.' });
    await this.leadObjects.firstNameInput.fill(firstName);
    await this.leadObjects.lastNameInput.fill(lastName);
    await this.leadObjects.phoneInput.fill(phone);
    await this.leadObjects.emailInput.fill(email);

    if (await this.leadObjects.primaryEmailCheckbox.isVisible()) {
      await this.leadObjects.primaryEmailCheckbox.check();
    }

    await this.leadObjects.saveButton.click();
    await this.leadObjects.page.waitForLoadState('networkidle');
  }
  async LeadCreated() {
    await this.leadObjects.fullusername.isVisible()
  }
  async verifyLeadCreated(fullName: string , salutation : string = 'Mr.' ) {
    await expect(this.leadObjects.fullNameLabel).toHaveText(`${salutation} ${fullName}`, { timeout: 10000 });
  }
}
