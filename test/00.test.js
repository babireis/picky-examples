
describe('Prepare', function() {

  it('application', function(done) {
    setTimeout(function () {
      done();
    }, 50);
    // }, 3000)
    // var app = global.app = require('../index');
    // app.on('start', function () {
    //   done();
    // })
  });

  it('application 22', function(done) {
    'ciao'.should.be.eql('ciao');
    expect('ciao').to.be.eql('ciao');
    setTimeout(function () {
      done();
    }, 50)
  });

});
