let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawgame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw.Play again";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userchoiceId, compchoice) => {
    if(userwin) {
        userscore++;
        userscorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = `you win! Your ${userchoiceId} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `you lose! ${compchoice} beats Your ${userchoiceId}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame =(userchoiceId) => {
    console.log("user choice = ",userchoiceId);
    const compchoice = gencompchoice();
    console.log("computer choice = ",compchoice);
    //generating computer choice;

    if(userchoiceId === compchoice){
        //draw
        drawgame();
    } else {
        let userwin = true;
        if(userchoiceId === "rock"){

            // paper,scissor;

            userwin = compchoice === "paper" ? false : true;
        } else if (userchoiceId === "paper"){
            // rock,scissor

            userwin = compchoice === "scissor" ? false : true;
        } else {
            // paper,rock
            compchoice === "rock" ? false :true;
        }
        showwinner(userwin, userchoiceId, compchoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    const userchoiceId = choice.getAttribute("id");
    choice.addEventListener("click",() => {
        console.log("choice was clicked",userchoiceId);
        playgame(userchoiceId);
    })
})

