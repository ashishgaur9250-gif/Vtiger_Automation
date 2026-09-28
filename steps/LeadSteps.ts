import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import data from "../TextData/login_Data.json";
import { LeadPage } from "../Pages/LeadPage";
import { VtigerWorld } from "../support/world";

function leadPage(world: VtigerWorld): LeadPage {
  return new LeadPage(world.page);
}

When("the user navigates to the Leads module", async function (this: VtigerWorld) {
  await leadPage(this).openLeads();
});

When("the user clicks on the Create Lead button", async function (this: VtigerWorld) {
  await leadPage(this).clickCreateLead();
});

When("the user enters the lead first name", async function (this: VtigerWorld) {
  await this.page.locator("input[name='firstname']").fill(data.lead.firstName);
});

When("the user enters the lead last name", async function (this: VtigerWorld) {
  await this.page.locator("input[name='lastname']").fill(data.lead.lastName);
});

When("the user enters the lead company name", async function (this: VtigerWorld) {
  await this.page.locator("input[name='company']").fill(data.lead.company);
});

When("the user enters the lead phone number", async function (this: VtigerWorld) {
  await this.page.locator("input[name='phone']").fill(data.lead.phone);
});

When("the user enters the lead email address", async function (this: VtigerWorld) {
  await this.page.locator("input[name='email']").fill(data.lead.email);
});

When("the user clicks on the Save button", async function (this: VtigerWorld) {
  await leadPage(this).saveLead();
});

Then("the lead should be created successfully", async function (this: VtigerWorld) {
  await expect(this.page).toHaveURL(/module=Leads/i);
});

When("the user clicks on the Logout button", async function (this: VtigerWorld) {
  await leadPage(this).logout();
});

Then("the user should be redirected to the Vtiger login page", async function (this: VtigerWorld) {
  await expect(this.page).toHaveURL(/index\.php/i);
  await expect(this.page.locator("input[name='user_name']")).toBeVisible();
});