
describe('Prepare', function() {

  it.only('application', function(done) {
    done();
    // var app = global.app = require('../index');
    // app.on('start', function () {
    //   done();
    // })
  });

  it('application 2', function(done) {
    'ciao'.should.be.eql('ciao');
    expect('ciao').to.be.eql('ciao');
    done();
  });

});
