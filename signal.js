const Point = require('./point.js');

let signal = function(array){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range = array;
  let period = array;

  function getRange(){return range;}
  function getPeriod(){return period;}
  function getPointArray(){return points;}

  function shiftX(value){
    for(a=0; a<numberOfPoints; a++){
        let tempx = P1.getX();
        let tempy = P1.getY();
        tempx += value;
        let tempPoint = new Point(tempx, tempy);
    }
  }

  function shiftY(value){
     for(a=0; a<numberOfPoints; a++){
         let tempx = P1.getX();
         let tempy = P1.getY();
         tempx += value;
         let tempPoint = new Point(tempx, tempy);
     }
  }
  function stretchX(value){
      for(a=0; a<numberOfPoints; a++){
        let tempx = P1.getX();
        let tempy = P1.getY();
        tempx *= value;
        let tempPoint = new Point(tempx, tempy);
      }
    }

    function stretchY(value){
      for(a=0; a<numberOfPoints; a++){
        let tempx = P1.getX();
        let tempy = P1.getY();
        tempy *= value;
        let tempPoint = new Point(tempx, tempy);
      }
    }
}
