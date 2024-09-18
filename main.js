"use strict";
// masalalar
// 1-masala
// let numberPrompt: string | null = prompt("Enter number");
// if (numberPrompt === null) {
//   console.log("Please enter a number");
// } else {
//   let firstNumber: string = numberPrompt[0];
//   let secondNumber: string = numberPrompt[1];
//   let thirdNumber: string = numberPrompt[2];
//   const addedFirstAndLast: number = Number(firstNumber) + Number(thirdNumber);
//   const res = addedFirstAndLast - Number(secondNumber);
//   console.log(res)
// }
// 2-masala
// let numberPrompt: string | null = prompt("Enter a number")
// let total:number = 0;
// for(let i = 1; i <= Number(numberPrompt); i++) {
//   let number:number = Number(numberPrompt)
//   if(number % i === 0){
//     total += i
//   }
// }
// console.log(total)
// 3-masala
// let array:any = [true, 'salom', 23, undefined]
// for(let i of array){
//   if(typeof i === 'string'){
//     array[array.indexOf(i)] = null
//   }
// }
// console.log(array)
// 4-masala
// let array: Array<number> = [43, 4, 53, 3, 89, 35, 56, 4, 5, 5, 46, 7];
// console.log(Math.max(...array.map(item => item)))
// 5-masala
// let array:Array<number> = [54, 32, 76, 12, 22]
// console.log(array.reduce((acc:number, currV:number) => acc + currV, 0))
// 6-masala yo'q ekan 7-masala
// let array:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i of array){
//   if(i % 2 === 0){
//     array[array.indexOf(i)] = 0
//   }
// }
// console.log(array)
// 8-masala
// let enterAction: string | null = prompt("Enter action (+, *, %, -)");
// let sureAction = confirm(`You choosed "${enterAction}", right`);
// switch (sureAction) {
//   case true:
//     let number1 = Number(prompt("Enter first number"));
//     let number2 = Number(prompt("Enter first number"));
//     console.log(eval(`${number1}${enterAction}${number2}`));
//     break;
// }
// 9-masala
// let array:string[] = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"]
// let enterName:string | null = prompt("Enter Name")
// if(enterName){
//   if(array.includes(enterName)){
//     console.log("Hello " + enterName)
//   }else{
//     console.log("User not found")
//   }
// }
// 10-masala
// let usersData: Array<{ id: number; age: number; name: String; gmail: String }> =
//   [
//     {
//       id: 1,
//       age: 14,
//       name: "Nuriddin",
//       gmail: "rnuriddin2010@gmail.com",
//     },
//     {
//       id: 2,
//       age: 15,
//       name: "Islom",
//       gmail: "ipardaboyev574@gmail.com",
//     },
//     {
//       id: 3,
//       age: 16,
//       name: "Ulug'bek",
//       gmail: "ulugbelolimjonov@gmail.com",
//     },
//     {
//       id: 4,
//       age: 17,
//       name: "Salmoh",
//       gmail: "salmohjabborov@gmail.com",
//     },
//     {
//       id: 5,
//       age: 16,
//       name: "Javohir",
//       gmail: "javohirfayzullayev@gmail.com",
//     },
//   ];
// let enterUserName: string | null = prompt("Enter Name").toLowerCase()
// console.log(usersData.filter((item) => item.name.toLowerCase() === enterUserName))
// 11-masala
// let usersData: Array<{ id: number; age: number; name: String; gmail: String }> =
//   [
//     {
//       id: 1,
//       age: 14,
//       name: "Nuriddin",
//       gmail: "rnuriddin2010@gmail.com",
//     },
//     {
//       id: 2,
//       age: 15,
//       name: "Islom",
//       gmail: "ipardaboyev574@gmail.com",
//     },
//     {
//       id: 3,
//       age: 16,
//       name: "Ulug'bek",
//       gmail: "ulugbelolimjonov@gmail.com",
//     },
//     {
//       id: 4,
//       age: 17,
//       name: "Salmoh",
//       gmail: "salmohjabborov@gmail.com",
//     },
//     {
//       id: 5,
//       age: 16,
//       name: "Javohir",
//       gmail: "javohirfayzullayev@gmail.com",
//     },
//   ];
// console.log(usersData.sort((a, b) => b.age - a.age)[0])
// 12-masala
// let usersData: Array<{ id: number; age: number; name: String; gmail: String }> =
//   [
//     {
//       id: 1,
//       age: 14,
//       name: "Bobby Haynes",
//       gmail: "rnuriddin2010@gmail.com",
//     },
//     {
//       id: 2,
//       age: 15,
//       name: "Lelia Bradley",
//       gmail: "ipardaboyev574@gmail.com",
//     },
//     {
//       id: 3,
//       age: 16,
//       name: "Jay Paul",
//       gmail: "ulugbelolimjonov@gmail.com",
//     },
//     {
//       id: 4,
//       age: 17,
//       name: "Thomas Schmidt",
//       gmail: "salmohjabborov@gmail.com",
//     },
//     {
//       id: 5,
//       age: 16,
//       name: "Iva Welch",
//       gmail: "javohirfayzullayev@gmail.com",
//     },
//   ];
//   const ages = usersData.reduce((acc:number, curr:{age: number}) => acc + curr.age / usersData.length, 0).toFixed(2)
//   console.log(ages)
// 13-masala
// let array: Array<number> = [23, 54, 21, 76, 23, 87];
// let firstValue:number = array[0];
// let latestValue:number = array[array.length - 1];
// let result:number = firstValue + latestValue
// if(result % 2 === 0){
//   array.unshift(result)
// }else{
//   array.push(result)
// }
// console.log(result)
// console.log(array)
// 14-masala
// let array:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let oddNumbers:Array<number> = []
// let evenNumbers:Array<number> = []
// array.forEach((element:number) => {
//   if(element % 2 === 0){
//     evenNumbers.push(element)
//   }else{
//     oddNumbers.push(element)
//   }
// })
// console.log(oddNumbers)
// console.log(evenNumbers)
// 15-masala
// ustoz aga ushbu masala noto'g'ri sihlangan bo'lsa feedback bering (oldindan rahmat) 😉!
// let array:Array<number> = [8, 7, 6, 5, 4]
// let newArray:Array<number> = []
// for(let age of array){
//   newArray.unshift(age)
// }
// console.log(newArray)
