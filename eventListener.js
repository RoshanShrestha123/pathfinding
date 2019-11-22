canvas.addEventListener("mousedown",function(e){
  mouseDown=true;
  if(mouseDown==true){
    mX=e.x;
    mY=e.y;
    for(var i=0;i<arr.length;i++){
      if(mX >= arr[i].X  &&  mX <= arr[i].X+size && mY>=arr[i].Y && mY<=arr[i].Y+size){
        if(block_point==true){
          arr[i].roadBlock(arr[i].X,arr[i].Y,i);
          if(blockedPath.includes(i)){
            //do nothing
          }
          else{
            blockedPath.push(i);
            console.log(blockedPath);
          }

        }
        if(start_point==true){
          arr[i].currentWeight=0;
          arr[i].startPath(arr[i].X,arr[i].Y,i);

          startCell.x=arr[i].X;
          startCell.y=arr[i].Y;

          startCell.index=i;
          startpoint=i;

          arr[i].previous=i;

          document.getElementById('startAddress').innerHTML=startCell.x+","+startCell.y;
          console.log("startCell="+startCell.x+","+startCell.y+","+startCell.index);
        }
        if(end_point==true){
          arr[i].endPath(arr[i].X,arr[i].Y,i);
          endCell.x=arr[i].X;
          endCell.y=arr[i].Y;
          endCell.index=i;
          pathIndex=i;
          document.getElementById('endAddress').innerHTML=endCell.x+","+endCell.y;
          console.log("endCell="+endCell.x+","+endCell.y+","+endCell.index);
        }

        //currentCell=arr[i];
        //endCell=arr[i+50];
      //  blockedPath.push(arr[i]);
      //  blockedPath.push(currentCell);

        //console.log("Colored: "+arr[i].X+","+arr[i].Y);
        //break;
      }

    }


  }
});
canvas.addEventListener("mouseup",function(e){
  mouseDown=false;
});



canvas.addEventListener("mousemove",function(e){
  if(mouseDown==true){

    mX=e.x;
    mY=e.y;
    

    for(var i=0;i<arr.length;i++){

      if(mX >= arr[i].X  &&  mX <= arr[i].X+size && mY>=arr[i].Y && mY<=arr[i].Y+size){
        if(block_point==true){

          arr[i].roadBlock(arr[i].X,arr[i].Y,i);
          if(blockedPath.includes(i)){
            //do nothing
          }
          else{
            blockedPath.push(i);
            console.log(blockedPath);
          }
        }
        break;
      }

    }


  }

});
