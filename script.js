const charmanderPic = document.querySelector('#charmander')
const bulbasaurPic = document.querySelector('#bulbasaur')
const squirtlePic = document.querySelector('#squirtle')
const yourChoicePic = document.querySelector('#your-choice')
const computerChoicePic = document.querySelector('#computer-choice')
const roundCounter = document.querySelector('#round-counter')
const yourScoreCounter = document.querySelector('#your-score')
const compScoreCounter = document.querySelector('#computer-score')
const yourTxtPokemon =  document.querySelector('#your-pokemon')
const compTxtPokemon =  document.querySelector('#computer-pokemon')
const battleResult =  document.querySelector('#battle-result')
const resultText = document.querySelector('#bottom-text')

const allPokemon = ['squirtle','charmander','bulbasaur']
let yourPokemon = ''
let computerPokemon = ''
let yourScore = 0
let computerScore = 0
let round = 0
let gameStatus= 'play-mode'

function resetAll(){
    yourPokemon = ''
    computerPokemon = ''
    yourScore = 0
    computerScore = 0
    round = 0
    yourTxtPokemon.textContent= ''
    compTxtPokemon.textContent=''
    yourScoreCounter.textContent = 0
    compScoreCounter.textContent = 0
    roundCounter.textContent = 0
    yourChoicePic.src = "images/pokeball.png"
    computerChoicePic.src = "images/pokeball.png"
    battleResult.textContent = 'Good Luck, Trainer!'
    battleResult.style.fontSize = '1.6rem';
    battleResult.style.fontWeight = '100';
}

function win(){
    yourScore++
    battleResult.textContent = 'You Won This Round!'
    console.log(`win! round=${round} you=${yourScore} | computer=${computerScore}`);
}

function lose(){
    computerScore++
    battleResult.textContent = 'Computer Won This Round!'
    console.log(`lose! round=${round} you=${yourScore} | computer=${computerScore}`);
}

function draw(){
    battleResult.textContent = "It's a Draw!"
    console.log(`draw! round=${round} you=${yourScore} | computer=${computerScore}`);
}
function playAgain(){
    console.log('play again pressed');
    const plyAgainBtn = document.querySelector('#play-button')
    resultText.removeChild(plyAgainBtn)
    resetAll()
    gameStatus = 'play-mode'
}

function checkWinner(){
    if (yourScore==6 || computerScore ==6){
        if (yourScore==6){
            console.log('you win')
            battleResult.textContent = 'YOU WON THE BATTLE!'     
        }
        else {
            battleResult.textContent = 'BETTER LUCK NEXT TIME, TRAINER!'
            console.log('you lose');
        }
        battleResult.style.fontSize = '2.2rem';
        battleResult.style.fontWeight = 'bold';
        const plyAgnBtn = document.createElement('button');
        plyAgnBtn.textContent = 'Play Again';
        plyAgnBtn.setAttribute('id',"play-button")
        resultText.appendChild(plyAgnBtn)
        plyAgnBtn.addEventListener('click',function(){
            playAgain()
        })
        gameStatus = 'wait-reset'
    }
}

function computerChoosePokemon(){
    // console.log(allPokemon[Math.floor(Math.random()*3)])
    return allPokemon[Math.floor(Math.random()*3)];
}
function update(){
    roundCounter.textContent=round
    yourScoreCounter.textContent=yourScore
    compScoreCounter.textContent=computerScore
}

function playRound(yourPokemon,computerPokemon){
    round++
    switch (yourPokemon){
        case 'squirtle':
            if(computerPokemon=='charmander'){
                win()
            }
            if(computerPokemon=='bulbasaur'){
                lose()
            }
            if(computerPokemon=='squirtle'){
                draw()
            }
            break;

         case 'charmander':
            if(computerPokemon=='bulbasaur'){
                 win()
            }
            if(computerPokemon=='squirtle'){
                lose()
            }
            if(computerPokemon=='charmander'){
                draw()
            }
            break;

        case 'bulbasaur':
            if(computerPokemon=='squirtle'){
                 win()
            }
            if(computerPokemon=='charmander'){
                lose()
            }
            if(computerPokemon=='bulbasaur'){
                draw()
           }
            break;
    }
}

resetAll()
const choices = [charmanderPic,bulbasaurPic,squirtlePic]
choices.forEach((e)=>e.addEventListener('click',function(){
    if(gameStatus=='play-mode'){
        yourPokemon = e.alt
        computerPokemon= computerChoosePokemon()
        yourChoicePic.src = `images/${yourPokemon}.png`
        computerChoicePic.src = `images/${computerPokemon}.png`
        yourTxtPokemon.textContent = `${yourPokemon.charAt(0).toUpperCase()+yourPokemon.slice(1)}`
        compTxtPokemon.textContent = `${computerPokemon.charAt(0).toUpperCase()+computerPokemon.slice(1)}`
        playRound(yourPokemon,computerPokemon)
        update()
        checkWinner()
    }
}))