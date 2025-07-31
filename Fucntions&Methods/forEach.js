//Normal fucntion used for the foreach 

let arr = [ 1  , 3 , 34, 5 ,56 ];

arr.forEach(function printVal(val){
    console.log(val);
})
// Writing code with arrow function 

let arrCity = ["halifax", "wolfville", "darthmouth" , "toronto"];

arrCity.forEach((city)=>{
    console.log(city);
})