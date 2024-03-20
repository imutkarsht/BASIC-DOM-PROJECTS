
// Creating a variable compputer response to store response of computer based on random value

let computerResponse = '';

//Setting and displaying value of score by taking from localstorage and showing 0 if score is not found

const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    };
// displaying current scenario of result

document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;

// function to display updated scores

function updateScoreElement(){
    document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, Ties: ${score.ties}, Losses: ${score.losses}`;
}

// function to pick computermove based of random value

function pickComputerMove(){

    let randomvariable = Math.random();
    if(randomvariable >= 0 && randomvariable < 1/3 ){
        computerResponse = 'Rock';
    }
    else if(randomvariable >=1/3 && randomvariable < 2/3){
        computerResponse = 'Paper';
    }
    else if(randomvariable >=2/3 && randomvariable < 1){
        computerResponse = 'Scissors';
    }
    return computerResponse;
}
// function to decide result of the game

function playGame(playerMove){
        const computerResponse = pickComputerMove();
        let result = '';
        if(playerMove==='Scissors'){
            if( computerResponse === 'Scissors'){
                result='tie';
                score.ties += 1;
               }
            else if(computerResponse === 'Paper'){
                result = 'You Won';
                score.wins += 1;
            }
            else if(computerResponse === 'Rock'){
                result = 'you lose';
                score.losses += 1;
            }
            updateScoreElement();
            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML = ` YOU
            <img src="images/${playerMove}.png" class="img" alt="">
            <img src="images/${computerResponse}.png" class="img" alt="">
            COMPUTER`;
            localStorage.setItem('score', JSON.stringify(score));
            
        }

        else if(playerMove==='Paper'){
            if( computerResponse === 'Rock'){
                result='You won';
                score.wins += 1;

               }
            else if(computerResponse === 'Paper'){
                result = 'Tie';
                score.ties += 1;

            }
            else if(computerResponse === 'Scissors'){
                result = 'you lose';
                score.losses += 1;

            }
            updateScoreElement();
            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML = ` YOU
            <img src="images/${playerMove}.png" class="img" alt="">
            <img src="images/${computerResponse}.png" class="img" alt="">
            COMPUTER`;
            localStorage.setItem('score', JSON.stringify(score));
           
        }

        else if( playerMove === 'Rock'){
            if( computerResponse === 'Rock'){
                result='Tie';
                score.ties += 1;

               }
            else if(computerResponse === 'Paper'){
                result = 'You lose';
                score.losses += 1;

            }
            else if(computerResponse === 'Scissors'){
                result = 'you Won';
                score.wins += 1;

            }
            updateScoreElement();
            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML = ` YOU
            <img src="images/${playerMove}.png" class="img" alt="">
            <img src="images/${computerResponse}.png" class="img" alt="">
            COMPUTER`;

            localStorage.setItem('score', JSON.stringify(score));
            
        }
}

