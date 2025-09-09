// let promise  = new Promise((resolve , reject )=>{
//     console.log("I am Promise ");
//     resolve("Congrats ")
// });
// function getData(dataId , getNextData){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("Data" , dataId);
//             resolve("Success");
//             if (getNextData){
//                 getNextData();
//             }
//         },4000);
//     });
// }

/* Promises 
.then() & .catch() 
promise.then((res)=>{.....}). ======>fullfilled 
promise.catch((err)=>{.....}) =======>not fullfilled 

*/

// const getPromise = () =>{
//     return new Promise((resolve , reject)=>{
//         console.log("I am a Promise");
//         resolve("error");
//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled")
// })



function asuncFunc(){
 return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Some Data=1");
        resolve("success");
    },4000);
 });
}


console.log("Loading the Data in 4 seconds")
let p1 = asuncFunc();
p1.then((res)=>{
    console.log(res);
})