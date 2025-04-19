//Bubble sort

let arr = [4,1,5,2,3];

 const reverseArr = (arr) => {
  let temp;
  for(let j=0; j<arr.length-1; j++) {
    for(let i=0; i<arr.length-j-1; i++) {
      if(arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}
console.log(reverseArr(arr));

