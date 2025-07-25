import { Locator, Page } from '@playwright/test';

export class ImportContactObjects {
    readonly page: Page;
    readonly salesDropdown: Locator;
    readonly contactsTab: Locator;
    readonly importContactsLink: Locator;
    readonly chooseFile: Locator;
    readonly uploadNextButton: Locator;
    readonly propertyNextButton: Locator;
    readonly mappingNextButton: Locator;
    readonly importNowButton: Locator;
    readonly viewContactsLink: Locator;
    readonly tableRows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.salesDropdown = page.locator('#grouptab_0');
        this.contactsTab = page.getByRole('link', { name: 'Contacts' });
        this.importContactsLink = page.getByRole('link', { name: 'Import Contacts' });
        this.chooseFile = page.locator('input[type="file"]');
        this.uploadNextButton = page.getByRole('button', { name: /NEXT/i }).first();
        this.propertyNextButton = page.getByRole('button', { name: 'Next >' });
        this.mappingNextButton = page.getByRole('button', { name: 'Next >' });
        this.importNowButton = page.getByRole('button', { name: /IMPORT NOW/i });
        this.viewContactsLink = page.getByRole('link', { name: /View Contacts/i });
        this.tableRows = page.locator('table.list.view tr');
    }
}
