import { Selector, t } from "testcafe";

class RegisterPage {
  constructor() {
    this.GenderMaleOption = Selector("#gender-male");
    this.GenderFemaleOption = Selector("#gender-female");
    this.FirstName = Selector("#FirstName");
    this.LastName = Selector("#LastName");
    this.DateOfBirthDayList = Selector("select[name='DateOfBirthDay']");
    this.DateOfBirthMonthList = Selector("select[name='DateOfBirthMonth']");
    this.DateOfBirthYearList = Selector("select[name='DateOfBirthYear']");
    this.Email = Selector("#Email");
    this.Password = Selector("#Password");
    this.ConfirmPassword = Selector("#ConfirmPassword");
    this.RegisterButton = Selector(
      "#register-button.button-1.register-next-step-button"
    );
    this.SuccessfullMessage = Selector("div.result").withText(
      "Your registration completed"
    );
    this.VerificationCheckboxLabel = Selector("span").withText(
      "Verify you are human"
    );
  }
  async selectDay(day) {
    const dayOption = this.DateOfBirthDayList.find("option");
    await t.click(this.DateOfBirthDayList).click(dayOption.withText(day));
  }
  async selectMonth(month) {
    const monthOption = this.DateOfBirthMonthList.find("option");
    await t.click(this.DateOfBirthMonthList).click(monthOption.withText(month));
  }
  async selectYear(year) {
    const yearOption = this.DateOfBirthYearList.find("option");
    await t.click(this.DateOfBirthYearList).click(yearOption.withText(year));
  }
}

export default new RegisterPage();
