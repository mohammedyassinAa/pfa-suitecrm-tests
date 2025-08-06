import { expect, Page } from '@playwright/test';
import { CreateOpportunityObjects } from '../../objects/opportunities/CreateOpportunityObjects';
import { OpportunityModel } from '../../models/opportunities/opportunityModel';

export class CreateOpportunityPage {
    readonly objects: CreateOpportunityObjects;
    readonly page: Page;

constructor(page: Page) {
    this.page = page;
    this.objects = new CreateOpportunityObjects(page);
}

  async navigateToOpportunities() {
    await this.objects.salesDropdown.click();
    await this.objects.opportunitiesLink.click();
  }

  async clickCreateOpportunity() {
    await this.objects.createOpportunityButton.click();
  }
  async fillOpportunityForm(data: OpportunityModel) {
    await this.objects.opportunityNameInput.fill('');
  
    // Fill the name with typing delay to trigger suggestions
    await this.objects.opportunityNameInput.type(data.name, { delay: 100 });
  
    await this.objects.accountNameInput.fill('');
    await this.objects.accountNameInput.type(data.account, { delay: 100 });
  
    // Wait for and click the correct suggestion
    const suggestion = this.page.locator('li.yui-ac-highlight');
    await suggestion.waitFor({ state: 'visible', timeout: 5000 });
    await suggestion.click();
    await this.page.waitForTimeout(1000); // short static wait, replace with smarter check if needed

    // Fill the rest of the form
    await this.objects.expectedCloseDateInput.fill(data.expectedCloseDate);
    await this.objects.amountInput.fill(data.amount);
    await this.objects.salesStageDropdown.selectOption(data.salesStage);
    await this.objects.saveButton.click();
  }
  
  
  

  async verifyOpportunityCreated(expectedName: string) {
    await expect(this.objects.headerTitle).toHaveText(expectedName, { timeout: 10000 });
  }
}
