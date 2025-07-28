import { Before, After, setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';

let browser: Browser;
let context: BrowserContext;

export class CustomWorld extends World {
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
setDefaultTimeout(20000);
setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await context.close();
  await browser.close();
});

