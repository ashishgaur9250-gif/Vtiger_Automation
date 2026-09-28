import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { VtigerWorld } from "./world";

setDefaultTimeout(30_000);

Before(async function (this: VtigerWorld) {
  await this.startBrowser();
});

After(async function (this: VtigerWorld) {
  await this.stopBrowser();
});