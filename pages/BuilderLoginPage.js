const { Selector } = require("testcafe");

function customSelect(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}
exports.LoginPageElements = {
  Heading: function () {
    return customSelect("h2").withText("Welcome!");
  },
  NameField: function () {
    return customSelect("input[name='username']");
  },
  PasswordField: function () {
    return customSelect("input[name='password']");
  },
  LoginButton: function () {
    return customSelect(".button");
  },
  ErrorToast: function () {
    return customSelect("div.MuiAlert-message.css-1xsto0d").withText(
      "Unauthorized: Invalid username or password"
    );
  },
};
