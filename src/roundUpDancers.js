var roundUpDancers = function(dancers, height, width) {
  var centerPoint = [width / 2, height / 2];
  var radius = 0.6 * centerPoint[0];
  var dancerCount = dancers.length;

  dancers.forEach((dancer, index) => {
    clearTimeout(dancer.timeoutVar);
    dancer.left = centerPoint[0] + radius * Math.sin(index * 2 * Math.PI / dancerCount);
    dancer.top = centerPoint[1] + radius * Math.cos(index * 2 * Math.PI / dancerCount);
    dancer.lineUp();
  });


};