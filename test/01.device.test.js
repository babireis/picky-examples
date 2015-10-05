
var path = require('path');

describe('Prepare', function() {

  it('application', function(done) {
    'ciao'.should.be.eql('ciao');
    done();
  });

  // describe("android simple", function () {
  //   this.timeout(300000);

  //   before(function (done) {
  //     var step = this.steps.mobile;

  //     console.log('eeeeeeee', step)
  //     var device = new step.Device({
  //       // browserName: 'chrome',
  //       // 'appium-version': '1.3',
  //       platformName: 'Android',
  //       // platformVersion: '2.3.5',
  //       deviceName: 'Android Emulator',
  //       // avd: 'test2',
  //       app: path.join(__dirname, "../test-device/apps/ApiDemos-debug.apk") // will be set later
  //     });

  //     device.start(function () {

  //       done();
  //     });


  //     // new step.Device({
  //     //   // browserName: 'chrome',
  //     //   // 'appium-version': '1.3',
  //     //   platformName: 'Android',
  //     //   // platformVersion: '4.4.2',
  //     //   deviceName: 'Android Emulator',
  //     //   avd: 'test2',
  //     //   app: path.join(__dirname, "../test-device/apps/ApiDemos-debug.apk") // will be set later
  //     // }).start(function () {

  //     //     // done();
  //     //   new step.Device({
  //     //     // browserName: 'chrome',
  //     //     // 'appium-version': '1.3',
  //     //     platformName: 'Android',
  //     //     // platformVersion: '4.4.2',
  //     //     deviceName: 'Android Emulator',
  //     //     avd: 'test',
  //     //     port:3020,
  //     //     app: path.join(__dirname, "../test-device/apps/ApiDemos-debug.apk") // will be set later
  //     //   }).start(function () {

  //     //     var device = new step.Device({
  //     //       // browserName: 'chrome',
  //     //       // 'appium-version': '1.3',
  //     //       platformName: 'Android',
  //     //       // platformVersion: '2.3.5',
  //     //       deviceName: 'Android Emulator',
  //     //       // avd: 'test',
  //     //       port:3021,
  //     //       app: path.join(__dirname, "../test-device/apps/ApiDemos-debug.apk") // will be set later
  //     //     });

  //     //     device.start(function () {
  //     //       done();
  //     //     });


  //     //   });
  //     // });

  //   });

  //   after(function (done) {
  //     var step = this.steps.mobile;
  //     done();
  //   });

  //   // afterEach(function () {
  //   //   allPassed = allPassed && this.currentTest.state === 'passed';
  //   // });

  //   it("should find an element", function (done) {
  //     var step = this.steps.mobile;

  //     step.devices.each(function (device, next) {
  //       device.emulator
  //         .elementByAccessibilityId('Graphics')
  //         .click()
  //         .elementByAccessibilityId('Arcs')
  //           // .should.eventually.exist
  //         .back()
  //         .elementByName('App')
  //           // .should.eventually.exist
  //         .elementsByAndroidUIAutomator('new UiSelector().clickable(true)')
  //           // .should.eventually.have.length(12)
  //         .elementsByAndroidUIAutomator('new UiSelector().enabled(true)')
  //           // .should.eventually.have.length.above(20)
  //         .elementByXPath('//android.widget.TextView[@text=\'API Demos\']')
  //           // .should.exists;
  //         .then(function () {
  //           next();
  //         });
  //     }, done);

  //   });
  // });

});
