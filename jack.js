
let namee = prompt("welcome, whats your name ?")
let n = document.getElementById("name")
n.textContent = "Hi, nice play dear "+ namee



let summ

let message =""


let mssg = document.getElementById("par-mess")
let card = document.getElementById("card")
let sum = document.getElementById("sum")
let resultat = document.getElementById("res")
let scor = document.getElementById("scor")
let cards =[]
let win = false
let lose = false
let point =0
scor.textContent ="your points are : "+ point +" $"

function generating()
{
    let rander = Math.floor(Math.random()*13)+1
    if (rander >10){
        return  10
    }else 
    {
    return rander
    }
}
function starGame(){
    if(cards.length===0){
        let first = generating()
        let second = generating()
         cards =[first,second]
         renderGame()
    }
    
}

function renderGame(){
card.textContent= "Cards : "
summ = 0
for(let i=0;i<cards.length;i++){
    card.textContent +=  cards[i] + " , "
    summ+=cards[i]
}
sum.textContent ="Sum :" +summ
if(summ=== 21){
    message = "ohooo you get it !!"
    resultat.textContent =" you win 🥳🥳🥳"
    win = true
    point+=100
    scor.textContent ="your points are : "+ point +" $"
}else if(summ>21) 
{
    message =" you are out of the game !!"

    resultat.textContent =" you lose 😥😥😥" 
    lose = true
}
else{
    message=" do you want to draw a new card ??"
}
mssg.textContent = message

}

function newCard()
{
    if(cards.length >= 2 && win == false && lose == false){
        cards.push(generating())
        renderGame()
    }else if (cards.length < 2)  {
        resultat.textContent = " you should star the game first !! "
    }

    
}
function newGame(){
    cards=[]
    win = false
    lose = false
    card.textContent= "Cards : "
    sum.textContent ="Sum : "

    resultat.textContent =""
    message="play a nother round ?"
    
}
     
    

