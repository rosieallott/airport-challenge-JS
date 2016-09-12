'use strict';

describe('Plane', function() {

  var plane;

  beforeEach(function() {
    plane = new Plane();
  });
  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined()
  });


  // it('cannot land at an airport', function(){
  //   airport = jasmine.createSpyObj('airport',['clearForLanding']);
  //   plane.land(airport);
  //   expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  // });
});
