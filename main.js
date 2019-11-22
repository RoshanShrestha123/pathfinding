var canvas = document.querySelector("canvas");
canvas.height= window.innerHeight;
canvas.width= 1000;
//console.log("size of canvas= "+canvas.width+", "+canvas.height);
var c = canvas.getContext('2d');
var rows,cols;
var size=20;
var fontSize="2px Arial";
var textXpostion=1;
var arr=[];
var mouseDown=false;
var mouseUp=true;
var mouseMove=false;
var blockedPath=[];
var mX=0;
var mY=0;
var startpoint=0;
var start_point=false;
var end_point=false;
var block_point=false;
var startFindingPath=false;

var visitedCell=[];
var unvisitedCell=[];
var minValue=0;
var minValueIndex=0;
var pathIndex=undefined;

//current Cell
var currentCell={
  x:undefined,
  y:undefined,
  index:undefined
};

var startCell={
  x:undefined,
  y:undefined,
  index:undefined
};

var endCell={
  x:undefined,
  y:undefined,
  index:undefined
};





//conrolling grid here
var Grid=function(size){
  rows=Math.floor(canvas.height/size);
  cols=Math.floor(canvas.width/size);
  //console.log(cols+" "+rows);
var i=0;
  for(var x=0;x<rows;x++){
    for(var y=0;y<cols;y++){
    //  var cell= new Cell(x,y);
      arr.push(new Cell(x,y,i));
      i++;
    }
  }

}

var grid= new Grid(size);

render();


function startPoint(){
  start_point=true;
  end_point=false;
  block_point=false;
  startFindingPath=false;

  console.log("startpoint");
}
function blockPoint(){
  block_point=true;
  start_point=false;
  end_point=false;
  startFindingPath=false;
  console.log("blockPoint");
}
function endPoint(){
  end_point=true;
  block_point=false;
  start_point=false;
  startFindingPath=false;
  console.log("endpoint");
}
function findPath(){
  end_point=false;
  block_point=false;
  start_point=false;
  startFindingPath=true;
  animate();
  console.log("startFindingPath");
}

function animate(){
if(startFindingPath==true){
  dijktraPath();
  }
}

function dijktraPath(){
  if(arr.length!=0){
    requestAnimationFrame(animate);
    if(visitedCell.includes(endCell.index)){
          //do nothing
          console.log("found it");
          arr[pathIndex].smallestWeight();

          pathIndex=arr[pathIndex].previous;



      }
      else{
        //  console.log("current cell index: "+startpoint);

          var nextCell=nextNeig(arr[startpoint].X,arr[startpoint].Y,startpoint);

          visitedCell.push(startpoint);
          arr[startpoint].visitedCellColor();
          document.getElementById('pathWeight').innerHTML=arr[startpoint].currentWeight;
          unvisitedCell.splice(startpoint,1);
          startpoint=nextCell;


      }
    }
}



function render(){
  //generating the grid
  for(var i=0;i<arr.length;i++){
    arr[i].draw();
    unvisitedCell.push(i);

    //console.log(arr[i].X);
  }


}
