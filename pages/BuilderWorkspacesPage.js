const { Selector } = require("testcafe");

function customSelect(selector) {
  return Selector(selector).with({ boundTestRun: testController });
}

exports.WorkspacesPageElements = {
  Heading: function (randomAppName) {
    return customSelect("h1").withText(randomAppName);
  },
};
