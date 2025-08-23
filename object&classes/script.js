//__prototype in JS 
// const employee = {
//     calcTax(){
//         console.log("Tax Rate is 10%");
//     }
// };

// const karanVeer = {
//     salary: 50000,
//     calcTax(){
//         console.log("Tax Rate is 20% ");
//     }
// };

// karanVeer.__proto__ = employee ;

//
//Classes in Js 
//Class is a  program-code template for creating Objects 
//Those objects wil have some state (variables) & some behaviour(functions) inside it .

class ToyotaCar{
    Start(){
    console.log("start");
    };

    stop(){
        console.log("stop");
    };
    setBrand(brand){
        this.setBrand = brand;
    }
};

let fortuner = new ToyotaCar();
fortuner.setBrand = ("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand = ("Lexus");

//Constructor() Method is 