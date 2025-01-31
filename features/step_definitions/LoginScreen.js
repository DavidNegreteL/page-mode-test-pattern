const { Given, Then } = require("@cucumber/cucumber");
const loginPage = require("../../pages/BuilderLoginPage");
const homePage = require("../../pages/BuilderHomePage");

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
