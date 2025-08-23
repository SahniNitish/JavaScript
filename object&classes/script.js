const employee = {
    calcTax(){
        console.log("Tax Rate is 10%");
    }
};

const karanVeer = {
    salary: 50000,
    calcTax(){
        console.log("Tax Rate is 20% ");
    }
};

karanVeer.__proto__ = employee ;