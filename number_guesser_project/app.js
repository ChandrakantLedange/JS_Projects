// Rule of the game or game function.
//-Player must guess a number between a min and max.
//-Player gets a certain amount of guesses.
//-Notify player of guesses remaining.
//-Notify the player of the correct answer if loose.
//-Let player choose to play again

//Game values
let min =  1, 
    max = 10,
    wininigNum = getRandomNum(min,max);
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

//play again event listner
game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

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
       GameOver(true,`${wininigNum} is correct, YOU WIN!`);

    }else{
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
           GameOver(false, `Game Over, you lost. The correct number was ${wininigNum}`);

        }else{
            //Game continues - answer wrong

            //change border color
            guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value ='';            
            
            //tell user it's wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');               
        }
    }
})

//GameOver function
function GameOver(won,msg){
    let color;
    won === true ? color = 'green' : color = 'red';

     //disable input
     guessInput.disabled = true;

     //change border color
     guessInput.style.borderColor = color;
     
     //change message text color 
     message.style.color = color;

     //set message
     setMessage(msg);

     //Play Again
     guessBtn.value = 'Play Again';
     guessBtn.className += 'play-again';
}

//function get winning number
function getRandomNum(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

//setMessage function
function setMessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}