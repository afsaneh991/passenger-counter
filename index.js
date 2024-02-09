 //document.getElementById("count-el").innerText=5
//let bonusPoints = 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save(){
console.log(count)
}

//let points = 4
//let bonusPoints = 5
//console.log(4 + 5)

//let wish = "I'd love to see the show \"The Lion King\"."
//console.log(wish)
let welcomeEl = document.getElementById("welcome-el")
let name ="Afsaneh Karimi"
let greeting = "Welcome back"

welcomeEl.innerText = greeting + name
