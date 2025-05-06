let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};
const drawGame = ()=>{
    msg.innerText="Game was Draw.Play again/";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice)=>{
      if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
      }
}

const playGame = (userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate Computer Choice
const compChoice = genCompChoice();
console.log("comp choice=", compChoice);

if(userChoice===compChoice){
    //Draw Game
    drawGame();
}else{
    let userWin= true;
    if(userChoice==="rock"){
        //scissors, Papers
        userWin=compChoice ==="paper" ? false : true;
    }else if(userChoice==="paper"){
        //rock, scissor
        userWin=compChoices==="scissors" ? false:true;
        }else{
         //rock, Paper
        userWin=compChoice==="rock" ? false:true;
    }
    showWinner(userWin, userChoice, compChoice);

}

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
