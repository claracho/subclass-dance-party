$(document).ready(function() {
  window.dancers = [];
  window.leader;
  window.followers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    
    // on mouseover, make the dancer expand and shrink
    $('.dancer').mouseenter(function(event) {
      $(this).animate({
        width: "+=10px",
        height: "+=10px"
      });
    });
    $('.dancer').mouseleave(function(event) {
      $(this).animate({
        width: "-=10px",
        height: "-=10px"
      });
    });
    $('.dancer').on('click', function(event) {
      if (window.leader === undefined) {
        var context = this;
        window.leader = window.dancers.find(function(dancer) {
          return dancer.$node[0] === context;
        });

        window.leader.$node.css({'border': '10px solid blue'});
        
        // randomize direction
        // then setInterval
        setInterval(()=>{ 
          var plusOrMinus = Math.random() > 0.5 ? 1 : -1;
          var plusOrMinus2 = Math.random() > 0.5 ? 1 : -1;
          window.leader.top += plusOrMinus * 5;
          window.leader.left += plusOrMinus2 * 5;
          window.leader.setPosition(window.leader.top, window.leader.left); 
        }, 100);
        
      } else {
        var context = this;
        var thisFollower = window.dancers.find(function(dancer) {
          return dancer.$node[0] === context;
        });
        window.followers.push(thisFollower);
        
        setInterval(()=>{
          thisFollower.top += (window.leader.top - thisFollower.top) > 0 ? 1 : -1;
          thisFollower.left += (window.leader.left - thisFollower.left) > 0 ? 1 : -1;
          thisFollower.setPosition(thisFollower.top, thisFollower.left); 
        }, 100);  
      }
    });
  });
  
  $('.roundUpDancersButton').on('click', function(event) {
    var roundUpFunctionName = $(this).data('round-up-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var roundUpFunction = window[roundUpFunctionName];
    roundUpFunction(window.dancers, $("body").height(), $("body").width());
    
  });

  $('.lineUpDancersButton').on('click', function(event) {
    var lineUpFunctionName = $(this).data('line-up-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var lineUpFunction = window[lineUpFunctionName];
    lineUpFunction(window.dancers, $("body").height(), $("body").width());
  });

});

