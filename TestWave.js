const Wave =require("./Wave.js");
const Point =require("./Point.js");


function main(){
    let p1 = new Point(0,0);
    let p2 = new Point(1,0);
    let p3 = new Point(2,1);
    let p4 = new Point(3,5);
    let p5 = new Point(4,3);
    let p6 = new Point(5,0);


    let array = [p1,p2,p3,p4,p5,p6];

    let testWave = new Wave(array);

    testWave.transform().forEach(function(point){
        point.print();
    });
    console.log("--------");
    testWave.shiftX(10);
    testWave.stretchY(3);



    let secondWave = new Wave(testWave.transform());

    secondWave.transform().forEach(function(point){
        point.print();
    });

}

main();
