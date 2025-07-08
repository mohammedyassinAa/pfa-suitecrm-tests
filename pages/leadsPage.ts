import { Page, expect } from '@playwright/test';

export class LeadsPage {
readonly page: Page;

constructor(page: Page) {
    this.page = page;
}

async navigateToLeads() {
    const salesDropdown = this.page.locator('#grouptab_0');
    await salesDropdown.click();
    await this.page.getByRole('link', { name: 'Leads' }).click();
    // Wait for the Leads page to load
    await this.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
}
async clickCreateLead() {
    const createLeadItem = this.page.locator('#actionMenuSidebar > ul > li:nth-child(2)');
    await createLeadItem.click();  
}

async createLead(firstName: string, lastName: string, phone: string, email: string) {
    // Select "Mr." from salutation dropdown
    await this.page.selectOption('select[name="salutation"]', { label: 'Mr.' });

    // Fill INFOS
    await this.page.fill('input[name="first_name"]', firstName);
    await this.page.fill('input[name="last_name"]', lastName);
    await this.page.fill('input[name="phone_work"]', phone);
    await this.page.fill('input[name="Leads0emailAddress0"]', email);

    // It is often primary by default, but if not:
    const primaryCheckbox = this.page.locator('input[name="email_primary"]');
    if (await primaryCheckbox.isVisible()) {
        await primaryCheckbox.check();
    }

    // Click Save
    await this.page.locator('#SAVE').first().click();
    await this.page.waitForLoadState('networkidle');
}


async verifyLeadCreated(fullName: string) {
  
    await expect(this.page.locator('#full_name')).toHaveText(fullName, { timeout: 10000 });

}
}
