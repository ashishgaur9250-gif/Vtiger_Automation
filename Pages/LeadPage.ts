import { Page } from "@playwright/test";
import { BasePage } from "./Basepage";

export class LeadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async openLeads(): Promise<void> {
    await this.page.getByText("Leads", { exact: true }).first().click();
  }

  async clickCreateLead(): Promise<void> {
    await this.page.locator("select").filter({ has: this.page.locator("option[value='Leads']") }).selectOption("Leads");
  }

  async enterLeadDetails(details: {
    firstName: string;
    lastName: string;
    company: string;
    phone: string;
    email: string;
  }): Promise<void> {
    await this.page.locator("input[name='firstname']").fill(details.firstName);
    await this.page.locator("input[name='lastname']").fill(details.lastName);
    await this.page.locator("input[name='company']").fill(details.company);
    await this.page.locator("input[name='phone']").fill(details.phone);
    await this.page.locator("input[name='email']").fill(details.email);
  }

  async saveLead(): Promise<void> {
    await this.page.locator("input[type='submit'][value*='Save'], input[name='button'][value*='Save']").first().click();
  }

  async logout(): Promise<void> {
    console.log(await this.page.locator("a, img, input, area").evaluateAll((elements) => elements
      .map((element) => element.outerHTML)
      .filter((html) => /logout|sign.?out/i.test(html))));
    await this.page.getByText("Logout", { exact: true }).click();
  }
}