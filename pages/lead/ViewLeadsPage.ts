import { ViewLeadsObjects } from '../../objects/lead/viewLeadsObjects';
import { expect , Page } from '@playwright/test';

export class ViewLeadsPage {
  readonly objects: ViewLeadsObjects;

  constructor(page : Page) {
    this.objects = new ViewLeadsObjects(page);
  }

  async navigateToViewLeads() {
    await this.objects.salesDropdown.click();
    await this.objects.leadsLink.click();
    await this.objects.viewLeadsLink.click();
  }

  async verifyLeadVisible() {
    await expect(this.objects.tableRows.first()).toBeVisible();
  }
}
