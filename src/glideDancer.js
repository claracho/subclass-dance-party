var GlideDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(BlinkyDancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps);
  this.trigger = 0;
  this.increment = 1;
  this.oldStep = Dancer.prototype.step.bind(this, timeBetweenSteps);

};

GlideDancer.prototype = Object.create(Dancer.prototype);
GlideDancer.prototype.constructor = GlideDancer;

GlideDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  this.$node.animate({'left': '+=50px'}, timeBetweenSteps);
  this.$node.animate({'left': '-=50px'}, timeBetweenSteps);
};