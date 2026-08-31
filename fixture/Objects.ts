import { test as base } from "@playwright/test";
import { Login_Vtiger } from "../Pages/LoginPage";

type Pages = {
    loginPage: Login_Vtiger;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        const loginPage = new Login_Vtiger(page);
        await use(loginPage);
    },

});
export { expect } from "@playwright/test";