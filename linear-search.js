 // Linear Search
 let arr = [4,1,5,2,3];

 const linearSearch = (arr, target) => {
  for(let i=1; i<arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 2));

// Global Linear Search
const globalLinearSearch = (arr, target) => {
  let temp = []
  for(let i=1; i<arr.length; i++) {
    if(arr[i] === target) {
      temp.push(i);
    }
  }
  if(temp.length === 0) return -1;
  return temp;
}
console.log(globalLinearSearch(arr, 0));
