import { expect, Page } from '@playwright/test';
import { ImportContactObjects } from '../../objects/contacts/ImportContactObjects';

export class ImportContactPage {
    readonly objects: ImportContactObjects;

    constructor(page: Page) {
        this.objects = new ImportContactObjects(page);
    }

    async navigateToImportContacts() {
        await this.objects.salesDropdown.hover();
        await this.objects.contactsTab.click();
        await this.objects.importContactsLink.click();
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

    async goToViewContacts() {
        await this.objects.viewContactsLink.click();
    }

    async verifyContactImported(contactFullName: string) {
        const contactRow = this.objects.page.locator(`table.list.view td a:has-text("${contactFullName}")`);
        await expect(contactRow.first()).toBeVisible({ timeout: 10000 });
    }
}
