//Binary Search
let arr = [-1, 0, 3, 5, 9, 12];

const binarySearch =(arr, target) => {
  let start = 0;
  let end = arr.length-1;

  while(start <= end) {
    let middle = Math.floor((start + end)/2);

    if(arr[middle] === target) {
      return middle;
    } else if(arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1
}

console.log(binarySearch(arr, 3))