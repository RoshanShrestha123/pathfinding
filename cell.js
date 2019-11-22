//each cell here
var Cell=function(x,y,i){
  this.x=y;
  this.y=x;
  this.index=i;
  this.previous=undefined;



  this.weight=0;
  this.currentWeight=Infinity;


  this.draw=function(){
    this.X=this.x*size;
    this.Y=this.y*size;
    c.beginPath();
    c.strokeStyle="#e3e3e3";
    c.rect(this.X,this.Y,size,size);
    c.stroke();

  }

  //block cell design
  this.roadBlock=function(x,y,i){
    this.X=x;
    this.Y=y;
    c.beginPath();
    c.fillStyle="black";
    c.strokeStyle="#353836";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();

    //Text on Block
    // c.font=fontSize;
    // c.fillStyle="white";
    // c.fillText(i,this.X+textXpostion,this.Y+(size/3));
    // console.log(this.X+","+this.Y);
  }


  //end path cell design
  this.endPath=function(x,y,i){
    this.X=x;
    this.Y=y;
    c.beginPath();
    c.fillStyle="red";
    c.strokeStyle="white";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();

    //Text on Block
    // c.font=fontSize;
    // c.fillStyle="white";
    // c.fillText(this.currentWeight,this.X+textXpostion,this.Y+(size/3));
    // console.log(this.X+","+this.Y);
  }


//start path cell design
  this.startPath=function(x,y,i){
    this.X=x;
    this.Y=y;
    c.beginPath();
    c.fillStyle="green";
    c.strokeStyle="white";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();

    //Text on Block
    // c.font=fontSize;
    // c.fillStyle="white";
    // c.fillText(this.currentWeight,this.X+textXpostion,this.Y+(size/3));
    // console.log(this.X+","+this.Y);
  }


//path design
  this.path=function(){
    c.beginPath();
    c.strokeStyle="white";
    c.fillStyle="#5db073";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();

    // //Text on Block
    // c.font=fontSize;
    // c.fillStyle="black";
    // c.fillText(this.index,this.X+35,this.Y+(size/2));
    // //console.log(this.X+","+this.Y);
  }

  this.checkingCell=function(){
    c.beginPath();

    c.strokeStyle="white";
    c.fillStyle="#66c0e3";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();
    // c.font=fontSize;
    // c.fillStyle="black";
    // c.fillText(this.previous+","+this.currentWeight,this.X+textXpostion,this.Y+(size/2));




  }
  this.smallestWeight=function(){
    c.beginPath();
    //c.strokeStyle="white";
    c.fillStyle="#c6e625";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    //c.stroke();
  }
  this.visitedCellColor=function(){
    c.beginPath();
    var grd = c.createLinearGradient(startCell.x, startCell.y, endCell.x, endCell.y);
    grd.addColorStop(0, "#42d7f5");
    grd.addColorStop(0.5, "#42a7f5");
    grd.addColorStop(1, "#266dc9");
    c.strokeStyle="white";
    c.fillStyle=grd;
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();
    // c.font=fontSize;
    // c.fillStyle="black";
    // c.fillText(this.previous+","+this.currentWeight,this.X+textXpostion,this.Y+(size/2));


  }

  this.finalPath=function(){
    c.beginPath();
    c.strokeStyle="white";
    c.fillStyle="blue";
    c.rect(this.X,this.Y,size,size);
    c.fill();
    c.stroke();
  }
}
