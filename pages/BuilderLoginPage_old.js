import { Selector } from "testcafe";

class BuilderLoginPage {
  constructor() {
    this.LoginHeading = Selector("h2").withText("Welcome!");
    this.UserNameField = Selector("input[name='username']");
    this.PasswordField = Selector("input[name='password']");
    this.LoginButton = Selector(".button");
    this.DashboardHeading = Selector("h1").withText("Your apps");
  }
}

export default new BuilderLoginPage();
