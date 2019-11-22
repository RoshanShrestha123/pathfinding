function nextNeig(x,y,currentIndex){
console.log("on nextNeig");
  unvisitedCell.splice(currentIndex,1);
  for(var i=0;i<arr.length;i++){
  //  console.log("searching for next neig");                          //right cell
    if(arr[i].X ==x+size && arr[i].Y==y){
      if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
        console.log("already visited right");
      //  arr[i].visitedCellColor();
      }else{
        arr[i].weight=arr[currentIndex].currentWeight+1;
        if(arr[i].currentWeight<=arr[i].weight){
          arr[i].weight=arr[i].currentWeight;
        }
        else{
          arr[i].currentWeight=arr[i].weight;
          arr[i].previous=arr[currentIndex].index;
          //arr[i].previous=arr[currentIndex].index;
        }
        console.log(" right weight"+arr[i].weight);

        arr[i].checkingCell();
        minValue=arr[i].currentWeight;
        minValueIndex=i;

      }




    }
    else if(arr[i].X ==x-size && arr[i].Y==y ) {
      if (visitedCell.includes(arr[i].index) || blockedPath.includes(arr[i].index)) {
        console.log("already visited left");
      //  arr[i].visitedCellColor();
      }else {
        arr[i].weight=arr[currentIndex].weight+1;
        if(arr[i].currentWeight<=arr[i].weight){
          arr[i].weight=arr[i].currentWeight;
        }
        else{
          arr[i].currentWeight=arr[i].weight;
          arr[i].previous=arr[currentIndex].index;

        }
        console.log(" left weight"+arr[i].weight);
      //  arr[i].previous=arr[currentIndex].index;
        arr[i].checkingCell();
        minValue=arr[i].currentWeight;
        minValueIndex=i;
      }


    }
    else if(arr[i].X ==x && arr[i].Y==y+size ){
      if (visitedCell.includes(arr[i].index) || blockedPath.includes(arr[i].index)) {
        console.log("already visited down");
      //  arr[i].visitedCellColor();
      }else{
        arr[i].weight=arr[currentIndex].weight+1;
        if(arr[i].currentWeight<=arr[i].weight){
          arr[i].weight=arr[i].currentWeight;
        }
        else{
          arr[i].currentWeight=arr[i].weight;
          arr[i].previous=arr[currentIndex].index;

        }
        console.log(" down weight"+arr[i].weight);
      ///  arr[i].previous=arr[currentIndex].index;
        arr[i].checkingCell();
        minValue=arr[i].currentWeight;
        minValueIndex=i;
      }


    }
  else if(arr[i].X ==x && arr[i].Y==y-size ){
      if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
        console.log("already visited up");
      //  arr[i].visitedCellColor();
      }else{
        arr[i].weight=arr[currentIndex].weight+1;
        if(arr[i].currentWeight<=arr[i].weight){
          arr[i].weight=arr[i].currentWeight;
        }
        else{
          arr[i].currentWeight=arr[i].weight;
          arr[i].previous=arr[currentIndex].index;
        }
        console.log(" up weight"+arr[i].weight);
      //  arr[i].previous=arr[currentIndex].index;
        arr[i].checkingCell();
        minValue=arr[i].currentWeight;
        minValueIndex=i;

      }

    }
    else if(arr[i].X ==x+size && arr[i].Y==y+size ){        //right buttom
        if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
          console.log("already visited up");
        //  arr[i].visitedCellColor();
        }else{
          arr[i].weight=arr[currentIndex].weight+1.4;
          if(arr[i].currentWeight<=arr[i].weight){
            arr[i].weight=arr[i].currentWeight;
          }
          else{
            arr[i].currentWeight=arr[i].weight;
            arr[i].previous=arr[currentIndex].index;

          }
          console.log(" up weight"+arr[i].weight);
        //  arr[i].previous=arr[currentIndex].index;
          arr[i].checkingCell();
          minValue=arr[i].currentWeight;
          minValueIndex=i;

        }

      }
      else if(arr[i].X ==x+size && arr[i].Y==y-size ){      //right top
          if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
            console.log("already visited up");
          //  arr[i].visitedCellColor();
          }else{
            arr[i].weight=arr[currentIndex].weight+1.4;
            if(arr[i].currentWeight<=arr[i].weight){
              arr[i].weight=arr[i].currentWeight;
            }
            else{
              arr[i].currentWeight=arr[i].weight;
              arr[i].previous=arr[currentIndex].index;
            }
            console.log(" up weight"+arr[i].weight);
          //  arr[i].previous=arr[currentIndex].index;

            arr[i].checkingCell();
            minValue=arr[i].currentWeight;
            minValueIndex=i;

          }

        }
        else if(arr[i].X ==x-size && arr[i].Y==y+size ){      //left buttom
            if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
              console.log("already visited up");
            //  arr[i].visitedCellColor();
            }else{
              arr[i].weight=arr[currentIndex].weight+1.4;
              if(arr[i].currentWeight<=arr[i].weight){
                arr[i].weight=arr[i].currentWeight;
              }
              else{
                arr[i].currentWeight=arr[i].weight;
                arr[i].previous=arr[currentIndex].index;
              }
              console.log(" up weight"+arr[i].weight);
            //  arr[i].previous=arr[currentIndex].index;

              arr[i].checkingCell();
              minValue=arr[i].currentWeight;
              minValueIndex=i;

            }

          }
          else if(arr[i].X ==x-size && arr[i].Y==y-size ){      //left top
              if (visitedCell.includes(arr[i].index)|| blockedPath.includes(arr[i].index)) {
                console.log("already visited up");
              }else{
                arr[i].weight=arr[currentIndex].weight+1.4;
                if(arr[i].currentWeight<=arr[i].weight){
                  arr[i].weight=arr[i].currentWeight;
                }
                else{
                  arr[i].currentWeight=arr[i].weight;
                  arr[i].previous=arr[currentIndex].index;
                }
                console.log(" up weight"+arr[i].weight);
                arr[i].checkingCell();
                minValue=arr[i].currentWeight;
                minValueIndex=i;

              }

            }
  }
  return(findMinValue(minValue,currentIndex));

  }
