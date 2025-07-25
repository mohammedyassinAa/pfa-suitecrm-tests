import { ViewContactsObjects } from '../../objects/contacts/ViewContactsObjects';
import { expect } from '@playwright/test';

export class ViewContactPage {
    readonly objects: ViewContactsObjects;

    constructor(page) {
        this.objects = new ViewContactsObjects(page);
    }

    async navigateToViewContacts() {
        await this.objects.salesDropdown.click(); 
        await this.objects.contactsTab.click();
        await this.objects.viewContactLink.click();
    }

    async verifyContactsVisible() {
        await expect(this.objects.tableRows.first()).toBeVisible();
    }
}
