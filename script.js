const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
  let res = [];
  let temp = [];
  let sum = 0;
  for(let i=0; i<=arr.length-1; i++)
  {
        if( ( sum+arr[i] ) > n){
            res.push(temp);
            temp = [];
            sum = 0;
        }
        sum += arr[i];
        temp.push(arr[i]);
  }
  if(temp.length > 0)
    res.push(temp);
  return res; 
};
var arrX = [1, 2, 3, 4, 1, 0, 2, 2];
console.log(JSON.stringify(divide(arrX, 5)));
