let firstcard =getRandomCard()
let secondcard=getRandomCard()
let sum = firstcard + secondcard
let cards = [firstcard,secondcard]
let message=" "
let sumEl=document.getElementById("sum-el")
let messageEl =document.getElementById("message-el")
let cardsEL = document.getElementById("cards-el")

let hasBlackJack = false
let isAlive = true

function getRandomCard(){
    let randomNumber =Math.floor(Math.random()*13) + 1
if(randomNumber>10){
 return 10
}else if(randomNumber===1){
    return 11
}else {
    return randomNumber
}
}


function startGame(){ 


        cardsEL.textContent = "Cards:" 
    for(let i=0; i<cards.length; i++){
        cardsEL.textContent += cards[i]+" "
    }
   

    if(sum < 21){
        message = "Do you want to draw a new card!"
    }else if(sum=== 21){
        message = "You got a Blackjack,YOU WON"
        hasBlackJack = true
    }else{
        message = "You are out of the game"
        isAlive  = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum 
}



function newCard(){

    if(isAlive === true && hasBlackJack === false){
        
        let card = getRandomCard()
        sum += card
        cards.push(card)
       
        startGame()
    }
   
}