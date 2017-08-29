var alignDancers = function(dancers, height, width) {
  var centerPoint = [width / 2, height / 2];
  var radius = 0.6 * centerPoint[0];
  var dancerCount = dancers.length;
  
  dancers.forEach((dancer, index) => {
    clearTimeout(dancer.timeoutVar);
    dancer.left = centerPoint[0] + radius * Math.sin(index * 180 / Math.PI);
    dancer.top = centerPoint[1] + radius * Math.cos(index * 180 / Math.PI);
    //clearTimeout(dancer.timeoutVar);
    dancer.lineUp();
  });


};