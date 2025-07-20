import { expect, Page } from '@playwright/test';
import { ImportAccountObjects } from '../../objects/accounts/ImportAccountObjects';

export class ImportAccountPage {
  readonly objects: ImportAccountObjects;

  constructor(page: Page) {
    this.objects = new ImportAccountObjects(page);
  }

  async navigateToImportAccounts() {
    await this.objects.salesDropdown.hover();
    await this.objects.accountsTab.click();
    await this.objects.importAccountsLink.click();
  }

  async uploadCSVFile(filePath: string) {
    await this.objects.chooseFile.setInputFiles(filePath);
    await this.objects.uploadNextButton.click();
  }

  async confirmProperties() {
    await this.objects.propertyNextButton.click();
  }

  async confirmMappings() {
    await this.objects.mappingNextButton.click();
  }

  async confirmAndImport() {
    await this.objects.importNowButton.click();
  }

  async goToViewAccounts() {
    await this.objects.viewAccountsLink.click();
  }

  async verifyAccountImported(accountName: string) {
    const accountRow = this.objects.page.locator(`table.list.view td a:has-text("${accountName}")`);
    await expect(accountRow.first()).toBeVisible({ timeout: 10000 });
  }
  
  }

