const { Selector, ClientFunction } = require("testcafe");

function customSelect(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}
function getCurrentURL() {
  return ClientFunction(() => window.location.href).with({
    boundTestRun: testController,
  });
}

exports.HomePageElements = {
  GetCurrentURL: function () {
    return getCurrentURL();
  },
  AvatarButton: function () {
    return customSelect("button.pf.button.primary").withText("D");
  },
  LogOutButton: function () {
    return this.AvatarButton()
      .sibling()
      .find("button.pf.button.support")
      .withText("Log out");
  },
  AppNavigationTab: function () {
    return customSelect("a.pf.link.primary[href='/']");
  },
  FunctionsNavigationTab: function () {
    return customSelect("a.pf.link.primary[href='/functions']");
  },
  DatabasesNavigationTab: function () {
    return customSelect("a.pf.link.primary[href='/databases']");
  },
  Heading: function () {
    return customSelect("h1").withText("Your apps");
  },
  SearchBar: function () {
    return customSelect("input.searchbar-input").withAttribute(
      "placeholder",
      "Search..."
    );
  },
  NewProjectButton: function () {
    return customSelect("button.pf.button.none");
  },
  CreateNewAppModal: function () {
    return customSelect("div.pf.pf-modal").withAttribute(
      "aria-hidden",
      "false"
    );
  },
  CreateNewAppModalButton: function () {
    return this.CreateNewAppModal()
      .find("button.pf.button.primary")
      .withText("Create app");
  },
  NewAppNameField: function () {
    return this.CreateNewAppModal().find("input[name='name']");
  },
};
