const charmanderPic = document.querySelector('#charmander')
const bulbasaurPic = document.querySelector('#bulbasaur')
const squirtlePic = document.querySelector('#squirtle')
const yourChoicePic = document.querySelector('#your-choice')
const computerChoicePic = document.querySelector('#computer-choice')
const roundCounter = document.querySelector('#round-counter')
const yourScoreCounter = document.querySelector('#your-score')
const compScoreCounter = document.querySelector('#computer-score')

const allPokemon = ['squirtle','charmander','bulbasaur']
let yourPokemon = ''
let computerPokemon = ''
let yourScore = 0
let computerScore = 0
let round = 0

function win(){
    yourScore++
    console.log(`win! round=${round} you=${yourScore} | computer=${computerScore}`);
}

function lose(){
    computerScore++
    console.log(`lose! round=${round} you=${yourScore} | computer=${computerScore}`);
}

function draw(){
    console.log(`draw! round=${round} you=${yourScore} | computer=${computerScore}`);
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

const choices = [charmanderPic,bulbasaurPic,squirtlePic]
choices.forEach((e)=>e.addEventListener('click',function(){
    yourPokemon = e.alt
    computerPokemon= computerChoosePokemon()
    yourChoicePic.src = `images/${e.alt}.png`
    computerChoicePic.src = `images/${computerPokemon}.png`
    playRound(yourPokemon,computerPokemon)
    update()
}))