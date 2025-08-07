import { expect, Page } from '@playwright/test';
import { ImportOpportunityObjects } from '../../objects/opportunities/ImportOpportunityObjects';

export class ImportOpportunityPage {
    readonly objects: ImportOpportunityObjects;

    constructor(page: Page) {
        this.objects = new ImportOpportunityObjects(page);
    }

    async navigateToImportOpportunities() {
        await this.objects.salesDropdown.click();
        await this.objects.opportunitiesLink.click();
        await this.objects.importOpportunitiesLink.click();
        await this.objects.page.waitForSelector('text=STEP 1: UPLOAD IMPORT FILE', { timeout: 10000 });
    }

    async uploadCSVFile(filePath: string) {
        await this.objects.fileInput.setInputFiles(filePath);

        this.objects.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.objects.importUpdateCheckbox.check();
        await this.objects.nextButton.click();
        await this.objects.goNextButton.click();
    }

    async mapFieldsAndImport() {
        await this.objects.opportunityNameSelect.selectOption({ label: 'Opportunity Name *' });
        await this.objects.accountNameSelect.selectOption({ label: 'Account Name *' });
        await this.objects.opportunityAmountSelect.selectOption({ label: 'Opportunity Amount *' });
        await this.objects.expectedCloseDateSelect.selectOption({ label: 'Expected Close Date *' });
        await this.objects.salesStageSelect.selectOption({ label: 'Sales Stage *' });
        await this.objects.goNextButton.click();
    }

    async confirmImport() {
        await this.objects.importNowButton.waitFor({ state: 'visible', timeout: 15000 });
        await this.objects.importNowButton.click();
        await this.objects.page.waitForLoadState('networkidle');
    }

    async navigateToViewOpportunities() {
        await this.objects.viewOpportunitiesLink.click();
        await this.objects.page.waitForSelector('h2.module-title-text:has-text("Opportunities")', { timeout: 10000 });
    }

    async verifyOpportunityImported(name: string) {
        const row = this.objects.page.locator(`table.list.view td a:has-text("${name}")`);
        await expect(row.first()).toBeVisible({ timeout: 10000 });
    }
}
