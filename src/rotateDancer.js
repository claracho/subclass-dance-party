var RotateDancer = function(top, left, timeBetweenSteps) {
  // this = Object.create(BlinkyDancer.prototype)
  Dancer.call(this, top, left, timeBetweenSteps);
  this.trigger = true;
  
  this.oldStep = Dancer.prototype.step.bind(this, timeBetweenSteps);

};

RotateDancer.prototype = Object.create(Dancer.prototype);
RotateDancer.prototype.constructor = RotateDancer;

RotateDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep(timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var inject;
  if (this.trigger) {
    inject = '+';
    this.trigger = false;
  } else {
    inject = '-';
    this.trigger = true;
  }
  this.$node.animate({"left": inject + "=100px"}, timeBetweenSteps);
};