
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 120');
  });

  it('should log the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'The total is: 20');
  });
});
