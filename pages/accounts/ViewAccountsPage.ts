import { ViewAccountsObjects } from '../../objects/accounts/ViewAccountsObjects';
import { expect } from '@playwright/test';

export class ViewAccountsPage {
    readonly objects: ViewAccountsObjects;

    constructor(page) {
        this.objects = new ViewAccountsObjects(page);
    }

    async navigateToViewAccounts() {
        await this.objects.salesDropdown.click(); 
        await this.objects.accountsTab.click();
        await this.objects.viewAccountsLink.click();
    }

    async verifyAccountsVisible() {
        await expect(this.objects.tableRows.first()).toBeVisible();
    }
}
