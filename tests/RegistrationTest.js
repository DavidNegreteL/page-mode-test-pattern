import { ClientFunction } from "testcafe";
import homePage from "../pages/HomePage";
import registerPage from "../pages/RegisterPage";
import loginPage from "../pages/LoginPage";
import customerPage from "../pages/CustomerPage";

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
let randomNumber = Math.floor(Math.random() * 10000);
let randomUserEmail = `dave${randomNumber}@test.com`;

fixture`Registration Fixture`.page(URL);

test("Assert Home Page Test", async (t) => {
  await t
    .expect(getURL())
    .eql(URL)
    .takeScreenshot()
    .expect(homePage.subtitleHeader.exists)
    .ok();
});

test("User Registration and Login Test", async (t) => {
  await t
    .click(homePage.registerLink)
    .setTestSpeed(0.5)
    .debug()
    .expect(getURL())
    .contains("register")
    .click(registerPage.GenderFemaleOption)
    .typeText(registerPage.FirstName, "Dave")
    .typeText(registerPage.LastName, "Negrete");

  await registerPage.selectDay("4");
  await registerPage.selectMonth("8");
  await registerPage.selectYear("1992");

  await t
    .typeText(registerPage.Email, randomUserEmail)
    .typeText(registerPage.Password, "123456")
    .typeText(registerPage.ConfirmPassword, "123456")
    .click(registerPage.RegisterButton)
    .expect(registerPage.SuccessfullMessage.exists)
    .ok();
});
