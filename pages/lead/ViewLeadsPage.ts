import { ViewLeadsObjects } from '../../objects/lead/viewLeadsObjects';
import { expect } from '@playwright/test';

export class ViewLeadsPage {
  readonly objects: ViewLeadsObjects;

  constructor(page) {
    this.objects = new ViewLeadsObjects(page);
  }

  async navigateToViewLeads() {
    await this.objects.salesDropdown.click();
    await this.objects.leadsLink.click();
    await this.objects.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
    await this.objects.viewLeadsLink.click();
    await this.objects.leadsTableFirstRowNameCell.waitFor({ timeout: 10000 });
  }

  async verifyLeadVisible(name: string) {
    const leadLocator = this.objects.page.locator(`table.list.view td:has-text("${name}")`);
    await expect(leadLocator.first()).toBeVisible({ timeout: 10000 });
  }
}
