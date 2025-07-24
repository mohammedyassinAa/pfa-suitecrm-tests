import { expect, Page } from '@playwright/test';
import { CreateContactObjects } from '../../objects/contacts/CreateContactObjects';
import { testContact } from '../../models/contact/contactModel';

export class CreateContactPage {
    readonly page: Page;
    readonly objects: CreateContactObjects;

    constructor(page: Page) {
        this.page = page;
        this.objects = new CreateContactObjects(page);
    }

    async navigateToCreateContact() {
        await this.objects.salesDropdown.click(); 
        await this.objects.contactsTab.click();
        await this.objects.createContactLink.first().click();
    }

    async fillContactForm() {
        await this.objects.salutationDropdown.selectOption({ label: testContact.salutation });
        await this.objects.firstNameInput.fill(testContact.firstName);
        await this.objects.lastNameInput.fill(testContact.lastName);
        await this.objects.officePhoneInput.fill(testContact.officePhone);
        await this.objects.mobileInput.fill(testContact.mobile);
        await this.objects.jobTitleInput.fill(testContact.jobTitle);
        await this.objects.departmentInput.fill(testContact.department);
        await this.objects.faxInput.fill(testContact.fax);
        await this.objects.accountNameInput.fill(testContact.accountName);
        await this.objects.emailInput.fill(testContact.email);
    }

    async saveContact() {
        await this.objects.saveButton.first().click();
    }

    async verifyContactCreated(name : string) {
        await expect(this.objects.successMessage).toContainText(name);

    }
    
}
