// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <img> tag
  if (Math.random() > 0.5) {
    this.$node = $('<img class="dancer" src="img/dancer1.png">');
  } else {
    this.$node = $('<img class="dancer" src="img/dancer2.png">');
  }
  this.top = top;
  this.left = left;
  this.timeoutVar;

  Dancer.prototype.step.call(this, timeBetweenSteps);

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  Dancer.prototype.setPosition.call(this, top, left);
};

Dancer.prototype.step = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.timeoutVar = setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  // .setPosition to lineup calculated value for each dancer
  this.setPosition(this.top, this.left);

  // reschedule setTimeout with uniform dance moves
  
  this.$node.animate({"top": "+=50px"});
  this.$node.animate({"top": "-=50px"});

  this.timeoutVar = setTimeout(this.lineUp.bind(this, 1000), 1000);
};