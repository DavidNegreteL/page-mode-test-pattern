const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const builderLoginPage = require("../../pages/BuilderLoginPage");

const URL = "https://builder-dev.pefai.com/";

Given("I open the login page", async function () {
  await testController.navigateTo(URL);
});
When("I enter First Name {string}", async function (userName) {
  await testController.typeText(
    builderLoginPage.LoginPageElements.NameField(),
    userName
  );
});
When("I enter Password {string}", async function (pswd) {
  await testController.typeText(
    builderLoginPage.LoginPageElements.PasswordField(),
    pswd
  );
});
Then("I press login button", async function () {
  await testController.click(builderLoginPage.LoginPageElements.LoginButton());
});
Then("I go to the user dashboard", async () => {
  await testController
    .expect(builderLoginPage.LoginPageElements.DashboardHeading().exists)
    .ok();
});
