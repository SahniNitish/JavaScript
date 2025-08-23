//Inheritance in Js 
/* inheritance is passing down properties & methods from the parent class to child class

class Parent{



}

class child extends parent{


}

*if child & parent have same method , child's 
method will be  used . [Method overriding]


*/

// class person{
//    constructor(){
//     this.species = "Homo Sapiens"
//    }

//     eat(){
//         console.log("Person will eat");
//     }

//     sleep(){
//         console.log("person will Sleep ");

//     }

// }

// class engineer extends person  {
//     work(){
//         console.log("Nitish will build cool stuff")
//     }
// }

// let nitishObj = new engineer();

/* Super Keyword 
the super is used to call the constructor of its parent 
class to access the parents properties and methods */


// super(args) //Parents's constructor 

//Super.parentMethod(args)

/* Q1 You are creating a website for your college . Create 
a Class User With 2 properties , name & email . it also has a method called Viewdata() 
that allows user to view webisite data*/
 let DATA = "secret data of website ";

class User{
    constructor(name , email){
        this.name = name ; 
        this.email = email;

    }

    viewData(){
        console.log("webisite data ", DATA);
    }
}


class Admin extends User{
    constructor(name , email){
        super(name , email);

    }
    editData(){
        DATA = "some new value";

    }
}


let student1 = new User("nitish ", "abc@gmail.com");
let student2 = new User("kashish" , "weuwi@example.com");

let admin1 = new Admin("admin" , "admin@example.com");