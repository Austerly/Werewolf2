'use strict';

describe('Service: cardKeeper', function () {

  // load the service's module
  beforeEach(module('werewolf2App'));

  // instantiate service
  var cardKeeper;
  beforeEach(inject(function (_cardKeeper_) {
    cardKeeper = _cardKeeper_;
  }));

  it('should do something', function () {
    expect(!!cardKeeper).toBe(true);
  });

});
