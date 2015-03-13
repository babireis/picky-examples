// "use strict";

// var wd = require("wd");

// // require('colors');
// var chai = require("chai");
// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
// var should = chai.should();
// chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// exports.should = should;


// var serverConfigs = {};
// serverConfigs.local = {
//   host: 'localhost',
//   port: 4723
// };





// var wd = require("wd"),
//     _ = require('underscore');

// describe("android simple", function () {
//   this.timeout(300000);
//   var driver;
//   var allPassed = true;

//   before(function () {
//     var serverConfig = serverConfigs.local;
//     driver = wd.promiseChainRemote(serverConfig);
//     require("./helpers/logging").configure(driver);

//     var desired = _.clone(require("./helpers/caps").android18);


//     // desired.app = require("./helpers/apps").androidApiDemos;

//     // if (process.env.SAUCE) {
//     //   desired.name = 'android - simple';
//     //   desired.tags = ['sample'];
//     // }
//     return driver
//       .init(desired)
//       .setImplicitWaitTimeout(3000);
//   });

//   after(function () {
//     return driver
//       .quit()
//       .finally(function () {
//         if (process.env.SAUCE) {
//           return driver.sauceJobStatus(allPassed);
//         }
//       });
//   });

//   afterEach(function () {
//     allPassed = allPassed && this.currentTest.state === 'passed';
//   });

//   it("should find an element", function () {
//     return driver
//       .elementByAccessibilityId('Graphics')
//       .click()
//       .elementByAccessibilityId('Arcs')
//         .should.eventually.exist
//       .back()
//       .elementByName('App')
//         .should.eventually.exist
//       .elementsByAndroidUIAutomator('new UiSelector().clickable(true)')
//         .should.eventually.have.length(12)
//       .elementsByAndroidUIAutomator('new UiSelector().enabled(true)')
//         .should.eventually.have.length.above(20)
//       .elementByXPath('//android.widget.TextView[@text=\'API Demos\']')
//         .should.exists;
//   });
// });