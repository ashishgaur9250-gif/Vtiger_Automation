import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import data from "./TextData/login_Data.json";
import { VtigerWorld } from "./support/world";

Given("the user opens the Vtiger login page", async function (this: VtigerWorld) {
  await this.loginPage.open_Url(data.open_Url.url);
});

When("the user enters a valid username", async function (this: VtigerWorld) {
  await this.loginPage.enter_UserName(data.valid_Login.username);
});

When("the user enters a valid password", async function (this: VtigerWorld) {
  await this.loginPage.enter_Password(data.valid_Login.password);
});

When("the user clicks on the Login button", async function (this: VtigerWorld) {
  await this.loginPage.clickOn_login_Button();
});

Then("the user should be redirected to the Vtiger dashboard", async function (this: VtigerWorld) {
  await expect(this.page).toHaveURL(/index.php/i);
});