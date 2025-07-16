import { Page, Locator } from '@playwright/test';

export class CreateLeadObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly leadsLink: Locator;
  readonly createLeadItem: Locator;
  readonly salutationDropdown: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly phoneInput: Locator;
  readonly emailInput: Locator;
  readonly primaryEmailCheckbox: Locator;
  readonly saveButton: Locator;
  readonly fullNameLabel: Locator;
  readonly fullusername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.leadsLink = page.getByRole('link', { name: 'Leads' });
    this.createLeadItem = page.locator('#actionMenuSidebar > ul > li:nth-child(2)');
    this.salutationDropdown = page.locator('select[name="salutation"]');
    this.firstNameInput = page.locator('input[name="first_name"]');
    this.lastNameInput = page.locator('input[name="last_name"]');
    this.phoneInput = page.locator('input[name="phone_work"]');
    this.emailInput = page.locator('input[name="Leads0emailAddress0"]');
    this.primaryEmailCheckbox = page.locator('input[name="email_primary"]');
    this.saveButton = page.locator('#SAVE').first();
    this.fullNameLabel = page.locator('#full_name');
    this.fullusername= page .locator('#pagecontent > div.moduleTitle > h2');    
  }
}
