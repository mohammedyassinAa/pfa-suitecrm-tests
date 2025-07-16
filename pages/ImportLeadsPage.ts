import { Page, expect  } from '@playwright/test';
import path from 'path';

export class ImportLeadsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToImportLeads() {
            const salesDropdown = this.page.locator('#grouptab_0');
            await salesDropdown.click();
            await this.page.getByRole('link', { name: 'Leads' }).click();
            await this.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
            await this.page.getByRole('link', { name: 'Import Leads' }).click();
            await this.page.waitForSelector('text=STEP 1: UPLOAD IMPORT FILE', { timeout: 10000 });
        
    }

    async uploadCSVFile() {
        const filePath = path.resolve('C:\\Users\\hp\\Desktop\\test_leads_import_suitecrm.csv');
        

        // Upload le fichier CSV
        await this.page.waitForSelector('input[type="file"]', { timeout: 10000 });
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);
         // Préparer le handler AVANT le clic
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        // Choisir "Create new records and update existing records"
        await this.page.locator('#import_update').check();

        // Cliquer sur NEXT
        // await this.page.getByRole('button', { name: /Next/ }).click();
        await this.page.getByRole('button', { name: 'NEXT >' }).click();
        await this.page.locator('#gonext').click();

    }

    async mapFieldsAndImport() {
      // Attendre que les selects soient visibles
      await this.page.waitForSelector('select[name="colnum_2"]', { timeout: 10000 });
      await this.page.waitForSelector('select[name="colnum_3"]', { timeout: 10000 });
  
      // Mapper Email et Address via leur valeur exacte
      await this.page.locator('select[name="colnum_2"]').selectOption('email1'); // Email
      await this.page.locator('select[name="colnum_3"]').selectOption('jjwg_maps_address_c'); // Address
  
      // Cliquer sur Next deux fois (Step 3 puis Step 4)
      await this.page.locator('#gonext').click();
    }

    async confirmDuplicatesAndImport() {
        await this.page.locator('#importnow').click();
        await this.page.waitForLoadState('networkidle');
    }
    async navigateToViewLeads() {
        await this.page.click('#actionMenuSidebar > ul > li:nth-child(4) > a > div.actionmenulink'); 
        await this.page.waitForSelector('h2.module-title-text:has-text("Leads")', { timeout: 10000 });
    } 
    async verifyLeadImported(fullName: string) {
        const leadRow = this.page.locator(`table.list.view td a:has-text("${fullName}")`);
        await expect(leadRow.first()).toBeVisible({ timeout: 10000 });
    }
}
