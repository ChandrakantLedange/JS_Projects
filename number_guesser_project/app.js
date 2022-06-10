// Rule of the game or game function.
//-Player must guess a number between a min and max.
//-Player gets a certain amount of guesses.
//-Notify player of guesses remaining.
//-Notify the player of the correct answer if loose.
//-Let player choose to play again

//Game values
let min =  1, 
    max = 10,
    wininigNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guess-btn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message');

//Assign UI min and max number
minNum.textContent = min;
maxNum.textContent = max;

//Lissten for guess
guessBtn.addEventListener('click',function(){
    const guess = parseInt((guessInput.value));
    console.log(guess);

    //Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
    }

    //Check if Won
    if(guess === wininigNum){
        //disable input
        guessInput.disabled = true;

        //change border color
        guessInput.style.borderColor = 'green';

        //set message
        setMessage(`${wininigNum} is correct, YOU WIN!`,'green');
    }
})

//setMessage function
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}