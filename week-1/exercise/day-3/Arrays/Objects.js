// // // // // // let person = {
// // // // // //   name: "Mariah",
// // // // // //   occupation: "Gangster"
// // // // // // }
// // // // // // console.log(person.occupation)
// // // // // // console.log(person.name)

// // // // // const names = ["Mariah", "James", "Luke"]
// // // // // const occupations = ["Gangster", "Preacher", "Hero"]
// // // // // console.log(names[0] + " is a " + occupations[0])

// // // // // const bag = {
// // // // //   weight: 10,
// // // // //   owner: "Larissa",
// // // // //   items: ["Pen", "Bottle", "Book"]
// // // // // }
// // // // // console.log (bag.items)
// // // // // console.log (bag.items[2])

// // // // // let car = {
// // // // //   color : "Grey" ,
// // // // //   numWheels: 4 ,
// // // // //   isFancy: false

// // // // // }

// // // // // console.log ("The " + car.color  + " car has " + car.numWheels + " wheels. ")

// // // // // if (car.isFancy){
// // // // // console.log("this car is fancy")
// // // // // }
// // // // // else{
// // // // //   console.log("this car isnt fancy")
// // // // // }

// // // // // let test = {
// // // // //   item : "Food",
// // // // //   toBeginning: true,
// // // // //   items :["pen","key","car"]
// // // // // }

// // // // // if (test.toBeginning){
// // // // // test.items.unshift(test.item)
// // // // // }
// // // // // else{
// // // // //   test.items.push(test.item)
// // // // // }
// // // // //   console.log(test.items)

// // // // const animalCounts = {
// // // //   lion: 2,
// // // //   zebra: 11,
// // // //   ostrich: 1,
// // // //   tortoise: 4
// // // // }

// // // // animalCounts["eagle"] = 24
// // // // console.log(animalCounts)

// // // // const human = {
// // // //   age: 0
// // // // }

// // // // const babyNameKey = "name"
// // // // const babyNameValue = "Goojibear"

// // // // human["babyNameValue"] = babyNameValue
// // // // console.log(human)

// // // // human.name = "Yarin"
// // // // console.log(human)

// // // // let instructor = {
// // // //   age: 27
// // // // }instructor.age += 1
// // // // instructor["age"] += 1
// // // // instructor.age++
// // // // instructor["age"]++
// // // // instructor.age = 28
// // // // instructor["age"] = 28

// // // let apple = {
// // //   color: "red",
// // //   name: "apple"
// // // }

// // // let cheese = {
// // //   color: "yellow",
// // //   name: "cheese"
// // // }

// // // let foods = [apple, cheese]

// // // console.log(apple.name)

// // const bag = {
// //   weight: 10,
// //   owner: "Larissa",
// //   items: [
// //     { item: "Pen", count: 2 },
// //     { item: "Bottle", count: 1 },
// //     { item: "Book", count: 3 },
// //   ]
// // }
// // console.log (bag.items[0].item)

// let numbers = [1, 2, 3]
// let nums = numbers
// nums[0] = 50
// console.log (nums[1])

// let person = {
//   firstName: "Dopple",
//   lastName: "Ganger"
// }

// let p = person
// p.firstName= "Chappy"

// console.log(p)
// console.log(person)

// If the people are the same age
// If the people live in the same city
// Print "Jill wanted to date Robert"
// If they're not in the same city
// Print "Jill wanted to date Robert, but couldn't"

// excercise 1
// let people = ["p1" , "p2"]
// let p1 = {
//   name: "Avi",
//   age: 22,
// city : "Rishon le zion",
// }
// let p2 = {
//   name: "Yossi",
//   age : 42,
//   city: "telaviv",
// }
// if (p1.age == p2.age){
//   if (p1.city== p2.city)
//      console.log("Jill wanted to date Robert")}
// else{
//   console.log("JJill wanted to date Robert, but couldn't")}


//excercice 2//

let myList = [
  { Location: "North",length: 20,},
  {Location:"South",length:25}]

  myList[0].Location = "West"
  myList.splice(1,1)
console.log(myList)

