import { Locator, Page } from '@playwright/test';

export class ImportAccountObjects {
    readonly page: Page;
    readonly salesDropdown: Locator;
    readonly accountsTab: Locator;
    readonly importAccountsLink: Locator;
    readonly chooseFile: Locator;
    readonly uploadNextButton: Locator;
    readonly propertyNextButton: Locator;
    readonly mappingNextButton: Locator;
    readonly importNowButton: Locator;
    readonly viewAccountsLink: Locator;
    readonly tableRows: Locator;

constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.accountsTab = page.getByRole('link', { name: 'Accounts' });
    this.importAccountsLink = page.getByRole('link', { name: 'Import Accounts' });
    this.chooseFile = page.locator('input[type="file"]');
    this.uploadNextButton = page.getByRole('button', { name: /NEXT/i }).first();
    this.propertyNextButton = page.getByRole('button', { name: 'Next >' });
    this.mappingNextButton = page.getByRole('button', { name: 'Next >' });
    this.importNowButton = page.getByRole('button', { name: /IMPORT NOW/i });
    this.viewAccountsLink = page.getByRole('link', { name: /View Accounts/i });
    this.tableRows = page.locator('table.list.view tr');
}
}
