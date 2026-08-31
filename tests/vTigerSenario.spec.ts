import { test, expect } from "../fixture/Objects";
import data from "../TextData/login_Data.json";

test("Vtiger login flow", async ({ page, loginPage }) => {
  await test.step("1. Open login page and sign in", async () => {
    await loginPage.open_Url("http://localhost:8888/");
    await loginPage.enter_UserName(data.valid_Login.username);
    await loginPage.enter_Password(data.valid_Login.password);
    await loginPage.clickOn_login_Button();
  });

  await expect(page).toHaveURL(/index.php/i);
});











