//const assert = require("assert");
// import pkg from "testcafe";
const { ClientFunction } = require("testcafe");
const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const loginPage = require("../../pages/BuilderLoginPage");
const homePage = require("../../pages/BuilderHomePage");
const workspacesPage = require("../../pages/BuilderWorkspacesPage");
const getPageURL = ClientFunction(() => window.location.href);

const URL = "https://builder-dev.pefai.com/";

Given(
  "the user has verified their identity and is logged into their account with crendentials",
  async function (dataTable) {
    for (const data of dataTable.hashes()) {
      await testController.navigateTo(URL);
      await testController.typeText(
        loginPage.LoginPageElements.NameField(),
        data.email
      );
      await testController.typeText(
        loginPage.LoginPageElements.PasswordField(),
        data.password
      );
      await testController.click(loginPage.LoginPageElements.LoginButton());

      if (data.valid === "true") {
        await testController
          .expect(homePage.HomePageElements.Heading().exists)
          .ok(
            "El inicio de sesión fue correcto y se redirigió al home del usuario"
          );
        // await testController.click(homePage.HomePageElements.AvatarButton());
        // await testController.click(homePage.HomePageElements.LogOutButton());
      } else {
        await testController
          .expect(loginPage.LoginPageElements.ErrorToast().exists)
          .ok(
            "Las credenciales fueron inválidas y se mostró el toast de error"
          );
      }
    }
  }
);

Then("it loads the user home page", async function () {
  await testController.expect(homePage.HomePageElements.Heading().exists).ok();
});

When("they clicks the New Project button", async function () {
  await testController.click(homePage.HomePageElements.NewProjectButton());
});

Then("the create modal should be visible", async function () {
  await testController
    .expect(homePage.HomePageElements.CreateNewAppModal().exists)
    .ok();
});

Then("set the app name to a random name", async function () {
  this.randomAppName = faker.hacker.adjective();
  await testController.typeText(
    homePage.HomePageElements.NewAppNameField(),
    `Automated ${this.randomAppName}`
  );
});

When("click the Create app button", async function () {
  await testController.click(
    homePage.HomePageElements.CreateNewAppModalButton()
  );
});

Then("the app should be created with the random name", async function () {
  await testController
    .expect(
      workspacesPage.WorkspacesPageElements.Heading(
        `Automated ${this.randomAppName}`
      ).exists
    )
    .ok();
});
