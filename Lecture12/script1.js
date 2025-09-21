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



<<<<<<< HEAD:Lecture12/script1.js
    // let promise = new Promise((resolve , reject)=>{
    //     console.log("I am a Promise");
    //     resolve(123);
    // })

    // let promise2 = new Promise((resolve , reject)=>{
    //     console.log("I am not a promise")
    // })

    function getData(dataId , getNextData){
        return  promise((resolve , reject)=>{
            setTimeout(()=>{
                console.log("Data" , dataId);
                resolve("success");
            if(getNextData){
                getNextData();
            }
            },5000);
        });
    }
=======
    let promise = new Promise((resolve , reject)=>{
        console.log("I am a Promise");
        resolve(sucess);
    })

 
>>>>>>> 62ede48f8c0159a49371ccad573c445d2872bb4c:Lecture12/script.js
   function getData(dataId , getNextData){
        return  promise((resolve , reject)=>{
            setTimeout(()=>{
                console.log("Data" , dataId);
                resolve("success");
            if(getNextData){
                getNextData();
            }
            },5000);