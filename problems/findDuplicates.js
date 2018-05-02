function findDuplicates(arr1, arr2) {
  const common = [];
  const smallerArray = arr1.length > arr2.length ? arr2 : arr1;
  var j=0;
  var  i=0;

  while(i<arr1.length && j<arr2.length){
    if(arr1[i] === arr2[j]){
      common.push(arr1[i]);
      i++;
      j++;
    } else {
      if(arr1[i] > arr2[j]){
        j++;
      } else {
        i++;
      }
    }
  }

  return common;
}