//Map  create a new array with results of some operation used to form new array . 

let nums = [1,3,4,5,6,7];

nums.map((val)=>{
    console.log(val); // this is method to print all value using map

})

let newArr = nums.map((num)=>{
    return num * 78;
});

console.log(newArr);