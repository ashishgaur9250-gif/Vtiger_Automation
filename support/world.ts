import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { Login_Vtiger } from "../Pages/LoginPage";

export class VtigerWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: Login_Vtiger;

  async startBrowser(): Promise<void> {
    this.browser = await chromium.launch({
      headless: process.env.HEADLESS !== "false",
    });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginPage = new Login_Vtiger(this.page);
  }

  async stopBrowser(): Promise<void> {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(VtigerWorld);