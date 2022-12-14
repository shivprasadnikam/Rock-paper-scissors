const computerChoice=document.getElementById('computer-choice');
const yourChoice=document.getElementById('your-choice');
const result=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');

let userChoice;
let computer;
let finalResult;

possibleChoices.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    yourChoice.innerHTML=userChoice;
    generateComputerChoice();
    getResult();
}))

//generate computer choice
function generateComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3)+1;
    //console.log(randomNumber)
    if(randomNumber === 1)
    {
        computer='rock';
    }
    if(randomNumber === 2)
    {
        computer='scissors';
    }
    if(randomNumber === 3)
    {
        computer='paper';
    }
    computerChoice.innerHTML = computer;


}
function getResult(){
    if(computer === userChoice)
    {
        finalResult="It's Draw !!!";
    }
    // user lost probality
    if(computer==='paper' && userChoice==='rock')
    {
        finalResult="you lost!"
    }
    if(computer==='scissors' && userChoice==='paper')
    {
        
        finalResult="you lost!"
    }
    if(computer==='rock' && userChoice==='scissors')
    {
        
        finalResult="you lost!"
    }
    //computer lost probality
    if(computer==='paper' && userChoice==='scissors')
    {
        finalResult="you won!"
    }
    if(computer==='scissors' && userChoice==='rock')
    {
        
        finalResult="you won!"
    }
    if(computer==='rock' && userChoice==='paper')
    {
        
        finalResult="you won!"
    }
    
    result.innerHTML=finalResult;

}