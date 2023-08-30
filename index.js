let cards = []
let sum = 0
let isAlive = false
let haveBlackjack = false
let message ;
// creating an object of player name and chips
let player = {
    name: "Kunal",
    chips: 2500
}
let playerEl = document.getElementById ("player-el")
playerEl.textContent = player.name + ": $" + player.chips
// "." operator for accessing variable from object "player"
//let messageEl = document.getElementById("message-el")
let messageEl = document.querySelector("#message-el")
console.log(messageEl)
//let sumEL = document.getElementById("sum-el")
let sumEL = document.querySelector("#sum-el")
//let cardEL = document.GetElementById("card-el")
let cardEl = document.querySelector("#card-el")

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard > 10){
        return 10
    }
    else if( randomCard === 1){
        return 11
    }
    else {
        return randomCard
    }
}


function startGame()
{   let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let sum = firstCard + secondCard
    let cards = [firstCard , secondCard ]
     isAlive = true
    renderGame()
}
function renderGame()
{

    cardEl.textContent =  "Cards: "
    for ( let i = 0 ; i < cards.length ; i += 1 )
{
cardEl.textContent += cards[i] + ","
}
console.log(cardEl)
    sumEL.textContent = "Sum: " + sum
if( sum <= 20)
{
    message = "Do you want to draw a new card!!"
    
    isAlive = true
    
}
else if( sum === 21)
{
    message = "Wohoo, you have a blackjack"
    
    isAlive = true
}
else{
    message = "you're out of the game"
   
    isAlive = false 
}
messageEl.textContent = message
}
function newCard(){
    if (isAlive === true && haveBlackjack === false ){
let thirdCard = getRandomCard()
cards.push(thirdCard)
console.log(cards[2])
//console.log(cards)
sum += thirdCard
renderGame()
    }
}




