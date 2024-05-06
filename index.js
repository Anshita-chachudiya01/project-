let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let trunO = true;//playerX playerO

  const  winPatterns = [
    [0,4,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8],
];
const resetGame =()=>{
    trunO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
        
}



boxes.forEach ((box) => {
    box.addEventListener("click",()=>{
        
        
        if(trunO){
         box.innerText="O";
         trunO=false;
        }
         else{
            box.innerText="X";
            trunO=true;
        }
        box.disabled=true;

        checkWinner();
         
        
    });
}
)   ;
        
     const disableboxes =()=>{
        for(let box of boxes){
            box.disabled=true;
        }
     }
     const enableboxes =()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
     }
    
    const ShowWinner=(Winner)=>{
        msg.innerText = ("Congratulation Winner");
        msgcontainer.classList.remove("hide");
        disableboxes();
       

    };
    

    
    const checkWinner = () => {
        for(let pattern of winPatterns){
            let pos1val=  boxes[pattern[0]].innerText;
            let pos2val=  boxes[pattern[1]].innerText;
            let pos3val=  boxes[pattern[2]].innerText;

            if(pos1val!= ""&& pos2val !=""&& pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log("Winner",pos1val);
                    ShowWinner(pos1val);
                }
            }

           

            
        
            
        }
    };
    newGameBtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);