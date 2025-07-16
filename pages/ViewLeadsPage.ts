import { Page } from '@playwright/test';

export class ViewLeadsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async navigateToViewLeads() {
        const salesDropdown = this.page.locator('#grouptab_0');
        await salesDropdown.click();
        await this.page.getByRole('link', { name: 'Leads' }).click();
        await this.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
        await this.page.getByRole('link', { name: 'View Leads' }).click();
        await this.page.waitForSelector('#MassUpdate > div.list-view-rounded-corners > table > tbody > tr:nth-child(1) > td:nth-child(4)', { timeout: 10000 });  
}
  
}
