//let div = document.querySelector("div");
//console.log(div);

//let val = div.getAttribute("id");
//console.log(val);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

let para2 = document.querySelector("p2");
console.log(para2.setAttribute("class" , "NitishSahni"));

// inserting element
//Step 1 - is to create teh element 

let button = document.createElement("button");
button.innerText = "Click Me !!!"
console.log(button);
//step 2 select the elelment or div

let div = document.querySelector("div");
div.append(button);
