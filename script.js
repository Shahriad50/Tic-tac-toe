// document.getElementsByClassName(".navbar").style.textsize ="red";

console.log("Welcome");
let camMusic=new Audio("Champion.mp3")
let music=new Audio("music.mp3");
let audioturn =new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn ="X";
let isgameover=false;

const changeTurn=() =>{
    return turn==="X"?"0":"X";
}
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==""){
            document.querySelector(".info").innerText=boxtext[e[0]].innerText+" won";
            isgameover=true;
            gameover.play();
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            const lineElement = document.querySelector(".line");

            // Adjust styles based on screen size
            if (window.innerWidth <= 600) {
              lineElement.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
              lineElement.style.width = "43.5vw"; // Adjusted width for smaller screens
            } else {
              lineElement.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
              lineElement.style.width = "22.5vw"; // Default width for larger screens
            }
        }
    })
}
//  music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
           turn= changeTurn();
            audioturn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
            }
        }
    })
})
// Add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
   Array.from(boxtexts).forEach(element=>{
            element.innerText=""
   });
        turn="X";
        isgameover=false;
       // camMusic.pause();
        //camMusic.currentTime()=0;
        document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px";
        document.querySelector(".line").style.width="0vw";
        })