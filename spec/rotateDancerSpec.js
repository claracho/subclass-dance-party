describe('rotateDancer', function() {

  var rotateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new RotateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that modifies css', function() {
    sinon.spy(rotateDancer.$node, 'css');
    rotateDancer.step();
    expect(rotateDancer.$node.css.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step 10 times per second', function() {
      sinon.spy(rotateDancer, 'step');
      expect(rotateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotateDancer.step.callCount).to.be.equal(10);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(20);
    });
  });
});
