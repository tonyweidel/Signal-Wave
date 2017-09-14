const Point = require('./point.js');

let signal = function(array){
  let numberOfPoints = array.length;
  let points = array;
  let transformedPoints = array;
  let range;
  let period;

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
    function transformation(){
            return transformedPoints;
    }
    outputOf(xvalue){
        for(let x=0; x<numberOfPoints; x++){
            if(points.getX()[x] == xvalue){
                return points.getY();
            }
        }
        console.log("Your x-value does not have a y-value")
        }

    function calculateSpan(array){
        Math.max(array)-Math.min(array);
    }
}
module.exports = Wave;
