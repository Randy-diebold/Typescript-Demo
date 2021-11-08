let greeting: string = 'Hello World';

// greeting = 2;

console.log(greeting);

// // basic static types
// let count: number
// let isdone: boolean
// let username: string

// // dynamic type
// let temp:any

// //Arrays
// const numArr: number[] = []
// numArr.push(1)
// // numArr.push("apple")

// //Tuple
// let user: [number, string, boolean];
// user = [10, 'Randy', true]

// //Tuple Array
// const userData: [number, string, boolean][] = [
//   [1, 'Reid', false],
//   [2, 'Matt', false]
// ];
// userData.push(user)

// // Union
// let userId: number|string;

// userId = 2
// userId = "2"
// userId = false

// // Enum or enumerated type: used to define a set of named constants can be either numbers or strings
// enum UsersIds {
//   Reid, // => 0
//   Matt, // => 1
//   Randy, // => 2
// }

// enum UsersNames {
//   Reid = 'Reid',
//   Matt = 'Matt',
//   Randy = 'Randy',
// }

// console.log(UsersIds.Matt + ': ' + UsersNames.Matt);

// // Objects
// const user1: {
//   id: number,
//   name: string
// } = {
//   id: 1,
//   name: 'Reid',
// };

// // a cleaner way to do this
// type User = {
//   id: number,
//   name: string
// }

// const user2: User = {
//   id: 2,
//   name: 'Matt',
// }

// // Type Assertion
// let uid: string|number;
// uid = 1
// let userIdNum = <number>uid
// // uid = '1'
// let userIdStr = uid as string

// // Functions
// function addtwo(x:number):number{
//   return x + 2;
// }

// console.log(addtwo(10))

// function greetUser(user: User):void{
//   console.log("Hello " + user.name);
// }

// greetUser(user2)

//Interfaces
interface UserInterface {
  id: number;
  name: string;
}
