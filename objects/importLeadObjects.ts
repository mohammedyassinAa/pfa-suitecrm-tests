import { Page, Locator } from '@playwright/test';

export class ImportLeadObjects {
  readonly page: Page;
  readonly salesDropdown: Locator;
  readonly leadsLink: Locator;
  readonly importLeadsLink: Locator;
  readonly fileInput: Locator;
  readonly importUpdateCheckbox: Locator;
  readonly nextButton: Locator;
  readonly goNextButton: Locator;
  readonly emailSelect: Locator;
  readonly addressSelect: Locator;
  readonly importNowButton: Locator;
  readonly viewLeadsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.salesDropdown = page.locator('#grouptab_0');
    this.leadsLink = page.getByRole('link', { name: 'Leads' });
    this.importLeadsLink = page.getByRole('link', { name: 'Import Leads' });
    this.fileInput = page.locator('input[type="file"]');
    this.importUpdateCheckbox = page.locator('#import_update');
    this.nextButton = page.getByRole('button', { name: 'NEXT >' });
    this.goNextButton = page.locator('#gonext');
    this.emailSelect = page.locator('select[name="colnum_2"]');
    this.addressSelect = page.locator('select[name="colnum_3"]');
    this.importNowButton = page.locator('#importnow');
    this.viewLeadsLink = page.locator('#actionMenuSidebar > ul > li:nth-child(4) > a > div.actionmenulink');
  }
}
