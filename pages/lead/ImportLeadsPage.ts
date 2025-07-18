import { expect, Page } from '@playwright/test';
import { ImportLeadObjects } from '../../objects/lead/importLeadObjects';

export class ImportLeadPage {
  readonly objects: ImportLeadObjects;

  constructor(page: Page) {
    this.objects = new ImportLeadObjects(page);
  }

  async navigateToImportLeads() {
    await this.objects.salesDropdown.click();
    await this.objects.leadsLink.first().click();
    await this.objects.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
    await this.objects.importLeadsLink.first().click();
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
    await this.objects.emailSelect.waitFor();
    await this.objects.addressSelect.waitFor();
    await this.objects.emailSelect.selectOption('email1');
    await this.objects.addressSelect.selectOption('jjwg_maps_address_c');
    await this.objects.goNextButton.click();
  }

  async confirmDuplicatesAndImport() {
    await this.objects.importNowButton.waitFor({ state: 'visible', timeout: 15000 });
    await this.objects.importNowButton.click();
    await this.objects.page.waitForLoadState('networkidle');
  }

  async navigateToViewLeads() {
    await this.objects.viewLeadsLink.click();
    await this.objects.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
  }

  async verifyLeadImported(fullName: string) {
    const leadRow = this.objects.page.locator(`table.list.view td a:has-text("${fullName}")`);
    await expect(leadRow.first()).toBeVisible({ timeout: 10000 });
  }
}
