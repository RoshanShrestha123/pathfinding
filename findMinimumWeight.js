function findMinValue(minValue,currentIndex){

  for(var i = 0; i < arr.length; i++) {
    if(currentIndex==i){
    }
    else if(visitedCell.includes(arr[i].index)){
      continue;
    }
    else if(minValue>=arr[i].currentWeight){

      minValue=arr[i].currentWeight;
      minValueIndex=i;
    }
  }
  return minValueIndex;
}
