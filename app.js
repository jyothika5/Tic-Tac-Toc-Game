let boxes=document.querySelectorAll(".box");
// console.log(boxes[0]);
var turn=true;
const win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]

]
let c=0;

console.log(win);
boxes.forEach((box)=>{

    box.addEventListener("click",()=>{
        if(turn){
            turn=false;
            box.innerText='O';
            box.disabled=true;
        }
        else{
            turn=true;
            box.innerText='X'
            box.disabled=true;
        }c++;
        checkforwinner();
    })
})
function disableall(){
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

let k=document.querySelector("#message");
var checkforwinner=()=>{
    for(let i=0;i<win.length;i++){
        let pos1=win[i][0],pos2=win[i][1],pos3=win[i][2];
        let posval1=boxes[pos1].innerText;
        let posval2=boxes[pos2].innerText;
        let posval3=boxes[pos3].innerText;
        
        if(c==9){
            disableall();
            k.innerText='Draw, PlayAgain!'
        }
        if(posval1!=''&&posval2!=''&&posval3!=''&&posval1==posval2&&posval2==posval3&&posval3==posval1){
            console.log('win');
            disableall();
            
            k.innerText='winner is '+posval1;

        }
        
    }
}

var newgame=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText='';
    })
    k.innerText='';
    c=0;

}
