/*  */

// function hello(){

//       console.log("Print in 3 seconds:");
// }

// setTimeout(hello,3000); //timeout

//calback

// function sum(a,b ){
//   console.log(a+b);
// }

// function calculator(a , b ,sumBack){
//     sumBack(a, b)

// }
// calculator( 2, 4 , sum);
// /* 
// Callback Hell 
// ==> Nested Callbacks stacked below one another forming a pyramid structure
// (pyramid of doom)

// This style of programmming becomes difficult to understand & manage .


// //Nesting
// let age = 19 ; 
// if (age>=18){
// if(age>=60){
//     console.log("")
//     }
//     console.log("senior")}
// else{
// console.log("child")
// }



// function getData(dataId , getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//       if(getNextData){
//         getNextData();
//       }
//     } , 2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     })
// })


/* Promises

promises is for "Eventual " completion of task . it is an 
Oject in  js It is solution to callback hell 


let promise = new Promise((resolve , reject)=>{
    
    })
    
    
    
    
    */



    let promise = new Promise((resolve , reject)=>{
        console.log("I am a Promise");
        resolve(sucess);
    })

 