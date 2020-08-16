// // // // let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// // // // // console.log(companies[0])
// // // // // console.log(companies[1])
// // // // // for(let companyIndex in companies){
// // // // //   console.log(companies[companyIndex])
// // // // // }
// // // // // // for(let companyIndex in companies){
// // // // // //   console.log(companyIndex)
// // // // // // }

// // // // // // for(let company of companies){
// // // // // //   console.log(company)
// // // // // // }

// // // // // for(company of companies){
// // // // //   console.log("One day I will work at " + company)
// // // // // }

// // // // // let timer = 0;

// // // // // while(timer < 10){
// // // // //   console.log(timer);
// // // // // //   timer++;
// // // // // while(companies.length > 0){
// // // // //   companies.splice(0, 1)

// // // // // for(let i = 0; i < 10; i++){
// // // // //   console.log(i)
// // // // // }

// // // // for(let i = 80; i < 100; i+=2){
// // // //   console.log(i)
// // // // }
// // // // //Using one for loop, print out "X is Y years old" for each pair.

// //Exercise 1//

// // // // let names = ["Lior", "Liran", "Yarin"]
// // // // let ages= [29, 26, 23]
// // // // for (let i = 0; i < names.length; i++) {
// // // //   console.log(names[i] + " is " + ages[i] + " years old" );
// // // // }

// //Exercise 2//

// // let numbers = [4 , 8 , 12 , 16 ,20]
// // // let sum = 0
// // // console.log(...numbers)
// // // for (i = 0; i <numbers.length; i++)
// // // {
// // //   sum = sum + numbers[i];
// // // }
// // // console.log("The sum is : " + sum);

// //Exercise 3//
// // {
// //  sum = 0;
// //   for(i = 0; i < numbers.length;i++){
// //       sum = sum + numbers[i];
// //   }
// //   console.log("the average is " + sum / numbers.length)
// // }

// // //Exercise 4//
// // let numbs = [];

// // for (let i = 0; i < 101; i++) {
// //   console.log(i);
// // numbs.push(i)
// // console.log(numbs)


// // }

// // //Exercise 5//
// // for (let i = 1; i < 100; i++) {
// //   if (i % 2 != 0) {
// //     console.log(i + " odd ");
// //   }
// // }


// // exercise 6//
// // let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// // for(let i = 0 ; i < nums.length ; i++) {
// //  if(nums[i] === 709) {
// //    console.log(i)
// //  }
// // } 


// //exercise 7 //

// // const names = ["Ashley", "Donovan", "Lucas"]
// // const ages = [23, 47, 18]
// // const people = []

// // for(let i = 0 ; i < names.length ; i++) {
// //   const personObj = {
// //     name: names[i],
// //     age: ages[i],
//   }
  
// //   people.push(personObj)
// // }
// // console.log(people)

// // //exercise 8 //

// // for(let i in people) {
// //   console.log(`Hello ${people[i].name} your age is ${people[i].age}`)
// }

// //exercise 9 //

// // const posts = [
// //   {id: 1, text: "Love this product"},
// //   {id: 2, text: "This is the worst. DON'T BUY!"},
// //   {id: 3, text: "So glad I found this. Bought four already!"}
// ]

// for(let i in posts) {
//   if(posts[i].id === 2){
//     posts.splice(i,1)
//   }
// }
// console.log(posts)

//exercise 10 //
const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let post in posts){
  if(posts[post].id === 2){
    for(let i in posts[post].comments){
      console.log(posts[post].comments)
      posts.splice(i,1)
    }
  }
}
console.log(posts)