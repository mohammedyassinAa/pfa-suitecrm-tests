import { Locator, Page } from '@playwright/test';

export class ImportVcardObjects {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly importButton: Locator;
    readonly successBanner: Locator;
    readonly salesDropdown: Locator;
    readonly contactsTab: Locator;
    readonly importvcard: Locator;
    constructor(page: Page) {

        this.page = page;
        this.salesDropdown = page.locator('#grouptab_0'); ;
        this.contactsTab = page.getByRole('link', { name: /Contacts/i });
        this.importvcard = page.getByRole('link', { name: /Create Contact From vCard/i });
        this.fileInput = page.locator('input[type="file"]');
        this.importButton = page.locator('#import_vcard_button');
        this.successBanner = page.locator('.moduleTitle h2'); 
    }
}
