import { Locator, Page } from '@playwright/test';

export class CreateContactObjects {
    readonly salutationDropdown: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly officePhoneInput: Locator;
    readonly mobileInput: Locator;
    readonly jobTitleInput: Locator;
    readonly departmentInput: Locator;
    readonly faxInput: Locator;
    readonly accountNameInput: Locator;
    readonly emailInput: Locator;
    readonly primaryAddressInput: Locator;
    readonly otherAddressInput: Locator;
    readonly saveButton: Locator;
    readonly contactsTab: Locator;
    readonly createContactLink: Locator;
    readonly salesDropdown: Locator;
    readonly successMessage: Locator;

constructor(page: Page) {
    this.salesDropdown = page.locator('#grouptab_0'); ;
    this.contactsTab = page.getByRole('link', { name: /Contacts/i });
    this.createContactLink = page.getByRole('link', { name: /Create Contact/i });
    this.salutationDropdown = page.locator('select[name="salutation"]');
    this.firstNameInput = page.locator('input[name="first_name"]');
    this.lastNameInput = page.locator('input[name="last_name"]');
    this.officePhoneInput = page.locator('input[name="phone_work"]');
    this.mobileInput = page.locator('input[name="phone_mobile"]');
    this.jobTitleInput = page.locator('input[name="title"]');
    this.departmentInput = page.locator('input[name="department"]');
    this.faxInput = page.locator('input[name="phone_fax"]');
    this.accountNameInput = page.locator('input[name="account_name"]');
    this.emailInput = page.locator('input[name="Contacts0emailAddress0"]');
    this.saveButton = page.getByRole('button', { name: /Save/i });
    this.successMessage = page.locator('h2.module-title-text');
}
}
