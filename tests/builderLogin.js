import { ClientFunction } from "testcafe";
import builderLoginPage from "../pages/BuilderLoginPage_old";

const dataSet = require("../data/data.json");

const URL = "https://builder-dev.pefai.com/";
const getURL = ClientFunction(() => window.location.href);

fixture`Login fixture`.page(URL);

test("Login Page test", async (t) => {
  await t
    .expect(getURL())
    .eql(URL)
    .takeScreenshot()
    .expect(builderLoginPage.LoginHeading.exists)
    .ok();
});

dataSet.forEach((data) => {
  test("User insert valid credentials", async (t) => {
    await t
      .typeText(builderLoginPage.UserNameField, data.userName)
      .typeText(builderLoginPage.PasswordField, data.password)
      .click(builderLoginPage.LoginButton)
      .expect(builderLoginPage.DashboardHeading.exists)
      .ok();
  });
});
