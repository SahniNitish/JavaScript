// Take a Number n as Input from user , Create an array of number
//from 1 to n Use the reduce method to calcualte sum of all numbers in the array
//use the reduce to calculate product of all numbers in the array . 
 
let n = prompt('Enter The Number: ');

let arr = []

for(i=1; i<=n ; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr)=>{
    return res + curr;
});

console.log("sum = " , sum) ;

let factorial = arr.reduce((res, curr)=>{
    return res * curr;
})
console.log("factorial" , factorial);