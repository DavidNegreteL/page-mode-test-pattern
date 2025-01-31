import { Selector, t } from "testcafe";

class HomePage {
  constructor() {
    this.subtitleHeader = Selector("h2").withText("Welcome to our store");
    this.registerLink = Selector("a").withText("Register");
    this.loginLink = Selector("a").withText("Login");
    this.shoppingCartLink = Selector("a").withText("Shopping cart");
    this.myAccountLink = Selector("a").withText("My account");
    this.logoutLink = Selector("a").withText("Log out");
    this.currencySelector = Selector("select#customerCurrency");
  }
  get productSearch() {
    return Selector("input#small-searchterms");
  }
  async search(product) {
    await t.typeText(this.productSearch, product).wait(3000).pressKey("enter");
  }
  async changeCurrency(currency) {
    await t
      .click(this.currencySelector)
      .click(Selector("option", { text: currency }));
  }
}

export default new HomePage();
