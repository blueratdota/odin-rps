// rps game

function randomHand(){
    return Math.floor(Math.random()*3)
}
function win(){
    return yourScore++;
}
function lose(){
    return aiScore++;
}
function draw(){
    return 0;
}


let yourScore=0;
let aiScore=0;

for(yourScore=0,aiScore=0,battle=1;;battle++){

    console.log(`BATTLE NUMBER ${battle}-------------------`)
    let posHands = ['squirtle','charmander','bulbasaur'];
    const aiHand = posHands[randomHand()];
    // let yourHand = prompt("choose between squirtle, charmander, and bulbasaur")
    
    switch (yourHand){
        case 'squirtle':
            if(aiHand=='charmander'){
                win()
            }
            if(aiHand=='bulbasaur'){
                lose()
            }
            if(aiHand=='squirtle'){
                draw()
            }
            break;

         case 'charmander':
            if(aiHand=='bulbasaur'){
                 win()
            }
            if(aiHand=='squirtle'){
                lose()
            }
            if(aiHand=='charmander'){
                draw()
            }
            break;

        case 'bulbasaur':
            if(aiHand=='squirtle'){
                 win()
            }
            if(aiHand=='charmander'){
                lose()
            }
            if(aiHand=='bulbasaur'){
                draw()
           }
            break;
    }

    console.log(`AI has chosen ${aiHand}`);
    console.log(`You chose ${yourHand}`);
    console.log(`AI score ${aiScore}`);
    console.log(`YOUR score ${yourScore}`);

    if(yourScore==5){
        console.log("YOU win");
        break
    }
    if(aiScore==5){
        console.log("AI win");
        break
    }

}



// for(yourScore=0,aiScore=0; yourScore<=5 || aiScore<=5;) {
//     let posHands = ['rock','paper','scissor'];
//     const aiHand = posHands[randomHand()];
//     let yourHand = "rock";
//     // let yourHand = prompt("type: rock, paper, or scissor");
//     console.log(aiHand);
//     console.log(yourHand);


    // yourScore = yourScore+1;
    // console.log(yourScore);

    // switch(hand){
    //     case 
    // }
