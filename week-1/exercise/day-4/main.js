// // // // // // const greet = function(){
// // // // // //   console.log("Hello there")
// // // // // // }
// // // // // // greet()

// // // // // // const funnyJoke = function(){
// // // // // //   console.log("haha")
// // // // // // }
// // // // // // funnyJoke()

// // // // // // const greet = function(name){
// // // // // //   console.log("Hello there, " + name)
// // // // // // }
// // // // // // greet("Dexter")
// // // // // // const newName = "Yarin Amrani"
// // // // // // greet (newName)
// // // // // // const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]

// // // // // // for(let n of names){
// // // // // //   greet(n)
// // // // // // }
// // // // // const greet = function(timeOfDay, name){
// // // // //   console.log("Good " + timeOfDay + " , " + name)
// // // // // }

// // // // // //calling the function
// // // // // greet("Evening", "Darrell")

// // // // // const welcome = function(name , time){
// // // // // console.log ( " Good " + name + " Dear " + time)
// // // // // }
// // // // // welcome("morning" , "yarin")

// // // // const createUser = function (name, age) {
// // // //   const user = { name: name, age: age };
// // // //   console.log(user);
// // // // };

// // // // createUser("William", 27); // prints {name: "William", age: 27}

// // // // const growOld = function (user) {
// // // //   user.age++;
// // // // };

// // // // const aDude = { name: "Ayd Ood", age: 23 };
// // // // growOld(aDude);

// // // // console.log(aDude); // prints {name: "Ayd Ood", age: 24}

// // // // const multiply = function(x, y = 2){
// // // //   console.log(x * y)
// // // // }

// // // // multiply(3, 4) // prints 12
// // // // multiply(3) // prints 6

// // // // const changeArray = function(arr){
// // // //   let innerArray = arr
// // // //   innerArray[0] = 50
// // // // }

// // // // const numbers = [1, 2, 3]

// // // // changeArray(numbers)
// // // // console.log(numbers) // prints [50, 2, 3]

// // // // const add = function(x, y){
// // // //   x + y
// // // // }

// // // // const sum = add(1, 2)
// // // // console.log(sum) // prints undefined


// // // // const add = function(x, y){
// // // //   return x + y
// // // // }

// // // // const sum = add(1, 2)
// // // // console.log(sum) // prints 3 !


// // // const findSmallest = function(numbers){
// // //   let smallest = numbers[0]

// // //   for(let num of numbers){
// // //     if(num < smallest){
// // //       smallest = num
// // //     }
// // //   }

// // //   return smallest
// // // }

// // // const ages = [17, 21, 9, 34]
// // // const youngest = findSmallest(ages)
// // // console.log(youngest) // prints 9

// // // const example = function(){
// // //   while(true){
// // //     return
// // //   }
// // // }

// // // const add = function(x, y){
// // //   const sum = x + y
// // //   return sum
// // //   console.log("Returned " + sum)
// // // }
// // // add(1, 2)

// // // const getInterest = function(money){
// // //   return money * 0.2
// // // }

// // // const getDebt = function(money){
// // //   const interest = getInterest(money)
// // //   return money + interest
// // // }

// // // const borrowedMoney = 100
// // // const debt = getDebt(borrowedMoney)
// // // console.log(debt) // prints 120

// // greet() //works without a problem
// // greetExpression() //throws an error

// // function greet(){
// //   console.log("Hello there, from the wild, wild West")
// // }

// // const greetExpression = function(){
// //   console.log("Uh oh")
// // }

// const person = {
//   name: "Julius",
//   speak: function(food) {
//     console.log("Et tu, Brutus?")
//   }
// }
// console.log(person.name) //you know what this will do 
// person.speak("cheese toast")

// const person = {
//   name: " Yarin ",
// speak: function(food)
// console.log(" I Like " + food)
// }

// const person = {
//   name: "Julius",
//   speak: function(food) {
//     console.log("I like " + food )
//   }
// }
// person.speak("Cheese Toast")
//excericse 1

// const calcAge = function (x, y) {
//   return x - y 
// }
// let age = calcAge(2017, 1989)
// console.log(age)

// //excercise 2

// const calcAge = function (x, y) {
//   return x - y 
// }
// let age = calcAge(2017, 1989)
// console.log(" you can either be " + age + " or " + (age += 1))


// for (let i = 1; i < 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i + " odd ");
//   }
// }

//excercise 3//
// const isEven = function (number) {
//   return number % 2 === 0
// }

// console.log(isEven(1))

//excercise 4//

// const oddNums = function (arr) {
//   for(let i = 0;i < arr.length;i++){
//     if(arr[i] % 2 !== 0){
//       console.log(arr[i])
//     }
//   }
// }
// const arr = [1,2,3,4,5]

// const oddNumsArr = oddNums(arr)

// oddNumsArr

const checkExists = function (arr , number){
  for(let i = 0;i < arr.length;i++){
    if (arr[i] === number) {
      return true
    }
  }
  return false
}

const hello = [1, 2, 3]

const world = 2

console.log(checkExists(hello, world))