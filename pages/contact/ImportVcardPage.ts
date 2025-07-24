import { Page, expect } from '@playwright/test';
import { ImportVcardObjects } from '../../objects/contacts/ImportVcardObjects';
import { vcardContact } from '../../models/contact/vcardModel';

export class ImportVcardPage {
    readonly page: Page;
    readonly objects: ImportVcardObjects;

    constructor(page: Page) {
        this.page = page;
        this.objects = new ImportVcardObjects(page);
    }

    async navigateToImportVcard() {
        await this.objects.salesDropdown.click(); 
        await this.objects.contactsTab.click();
        await this.objects.importvcard.first().click();    }

    async importVcard() {
        await this.objects.fileInput.setInputFiles(vcardContact.filePath);
        await this.objects.importButton.click();
    }

    async verifyImportSuccess() {
        await expect(this.objects.successBanner).toContainText('Mohammed yassine Aoulad ahriz');
    }
}
