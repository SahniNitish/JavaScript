let boxes  = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0  =true;  //(player x , player 0 )

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("Box is Clicked");
       if(turn0){
        box.innerText = "X",
        turn0 = false;
       }
       else{
        box.innerText = "0",
        turn0 = true;
       }
       box.Disabled = true;

       checkWinner();
    });
})

const checkWinner = () =>{

    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                console.log("Winner" , posVal1);
                box.Disabled = true;

            }
        }
    }

}
