// document.getElementById("count-el").innerText = 5
//tips!!!
//1) run the consol= control+alt+n
//2) u have to put the variable before calling it
//3) js start from the top and use the last value it founds
//4) when u do a function, u have to call it in order to display something in the console

// let count = 0

// console.log(count)

// // exercise1) create a variable, myAge and set its value to your age
// let myAge = 18
// // then log the myAge variable to the console

// console.log(myAge)


// //exercise2) create two variables, myAge and humanDogRatio
// let myAge = 18
// let humanDogRatio = 7
// //multiply the two together and store the result in myDogAge
// let myDogAge = myAge*humanDogRatio
// //log myDogAge to the console
// console.log(myDogAge)


// //exercise3) create a variable called bonusPoints. initialize its as 50
// let bonusPoints = 50
// //increase it to 100
// bonusPoints = bonusPoints*2
// //decrease it to 25
// bonusPoints = bonusPoints - 75
// //increase it to 70
// bonusPoints = bonusPoints + 45
// // then called it 
// console.log(bonusPoints)


//exercise4) initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
// let countEl = document.getElementById("count-el");
// console.log(countEl);
// let count = 0
// function increment(){
//     count = count + 1
//     countEl.innerText = count
// }

//exercise5) create a function that logs out the number 42 to the console
// called it

// function yo42(){
//     console.log(42)
// }
// yo42()

// //exercise6) create 3 laps variable and put it a random number
// let lap1=20
// let lap2=24
// let lap3=18
// //create a function that logs out the sum of all the lap times

// function logLapTime() {
//     console.log(lap1+lap2+lap3)
// }
// logLapTime()


// //exercise7) create a variable that shows the laps completed
// let lapsCompleted = 0
// // create a function that increments the laps completed variable with one
// function incrementLaps(){
//     lapsCompleted = lapsCompleted+1
// }
// //run it three times
// incrementLaps()
// incrementLaps()
// incrementLaps()
// console.log(lapsCompleted)


//exercise8) grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
let count=0

function increment(){
    count = count + 1
    countEl.innerText= count
}

//exercise9) create a function, save(), which logs out the count when it's called

function save(){
    console.log(count)
}

save()
