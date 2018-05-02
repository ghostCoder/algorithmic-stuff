function flip(arr, k) {
  let end = k - 1,
    start = 0;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    end--;
    start++;
  }

  return arr;
}

function pancakeSort(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    let largestIndex = 0,
      largest = arr[largestIndex];

    arr.forEach((value, index)=> {
      if (largest < value && index < (arr.length - i)) {
        largest = value;
        largestIndex = index;
      }
    });

    arr = flip(arr, largestIndex + 1);
    arr = flip(arr, arr.length - i);
  }

  return arr;
}

