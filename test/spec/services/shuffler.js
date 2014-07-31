'use strict';

describe('Service: shuffler', function () {

  // load the service's module
  beforeEach(module('werewolf2App'));

  // instantiate service
  var shuffler;
  beforeEach(inject(function (_shuffler_) {
    shuffler = _shuffler_;
  }));

  it('should do something', function () {
    expect(!!shuffler).toBe(true);
  });

});
