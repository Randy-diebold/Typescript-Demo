let greeting: string = 'Hello World';

// greeting = 2;

// console.log(greeting);

// basic static types
let count: number;
let isdone: boolean;
let username: string;

// // dynamic type
let temp: any;

//Arrays
const numArr: number[] = [];
numArr.push(1);
// numArr.push("apple")

//Tuple
let user: [number, string, boolean];
user = [10, 'Randy', true];

//Tuple Array
const userData: [number, string, boolean][] = [
  [1, 'Reid', false],
  [2, 'Matt', false],
];
userData.push(user);

// Union
let userId: number | string;

userId = 2;
userId = '2';
// userId = false

// Enum or enumerated type: used to define a set of named constants can be either numbers or strings
enum UsersIds {
  Reid = 10, // => 0
  Matt, // => 1
  Randy, // => 2
}

enum UsersNames {
  Reid = 'Reid',
  Matt = 'Matt',
  Randy = 'Randy',
}

// console.log(UsersIds.Matt + ': ' + UsersNames.Matt);

// Objects
const user1: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'Reid',
};

// a cleaner way to do this
type UserType = {
  id: number;
  name: string;
};

const user2: UserType = {
  id: 2,
  name: 'Matt',
};

// Type Assertion
let uid: string | number;
uid = 1;
let userIdNum = <number>uid;
uid = '1';
let userIdStr = uid as string;

// Functions
function addtwo(x: number): number {
  return x + 2;
}

// console.log(addtwo(10) + ' -> expected 12');

// use Void for no return value functions that just have side effects
function greetUser(user: UserType): void {
  console.log('Hello ' + user.name);
}

// greetUser(user2);

//Interfaces
// very similar to types
interface UserInterface {
  id: number;
  name: string;
  readonly age?: number;
}

const user3: UserInterface = {
  id: 3,
  name: 'Randy',
};

//types can be used with primitive types but not interfaces
type ID = string | number;

// //this is not a thing
// interface IdInterface string|number

// interfaces with numbers
interface MathFun {
  (x: number, y: number): number;
}

const add: MathFun = (x: number, y: number): number => {
  return x + y;
};

const mulitply: MathFun = (x: number, y: number): number => {
  return x * y;
};

console.log('5 + 4 = ' + add(5, 4));
console.log('5 x 4 = ' + mulitply(5, 4));

// Classes
interface CSUserInterface {
  id: number;
  name: string;
  greet(): string;
}

class CSUser implements CSUserInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  greet() {
    return 'Hello ' + this.name;
  }
}

const randy = new CSUser(10, 'Randy');
console.log(randy.greet());

class CSstaff extends CSUser {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }

  // greet() {
  //   return `Hello ${this.name}, our favorate ${this.position}!`;
  // }
}

const reid = new CSstaff(1, 'Reid', 'Instructor');
console.log(reid.greet());
