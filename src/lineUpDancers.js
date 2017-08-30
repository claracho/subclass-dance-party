var lineUpDancers = function(dancers, height, width) {
  var centerPoint = [width / 2, height / 2];
  var startPoint = centerPoint[0] - 0.6 * centerPoint[0];
  var distance = 1.2 * centerPoint[0];
  var dancerCount = dancers.length;
   
  dancers.forEach((dancer, index) => {
    clearTimeout(dancer.timeoutVar);
    dancer.left = startPoint + (index / dancerCount) * distance;
    dancer.top = centerPoint[1];
    console.log(dancer.top);
    dancer.lineUp();
  });


};