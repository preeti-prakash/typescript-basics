//ENVIRONMENT SET UP
export {};
let message = "hello world ";
console.log(message);

//VARIABLE DECLARATIONS
let x = 10;
const y = 20;

//let and const variables cannot be declared multiple times
//the let variable can be declared
let sum;

//the const variables cannoy be declared, it has to be assigned with a value
const title = "typescript tutorial";

//VARIABLE TYPES

// boolean, number and string types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = "preeti";

let sentence: string = `my name is ${name}`;
console.log(sentence);

//null and undefines - sub types of all other types
let n: null = null;
let u: undefined = undefined;

// let myName: string = undefined;

//Arrays
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Arrays - mixed types - tuples
let person1: [string, number] = ["Chris", 11];

//enum values
enum Color {
  Red = 5,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

//any  - what a variable type to be
let random: any = 10;
random = true;
random = "preeti";

let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

//unknown
let myVariable2: unknown = 10;
// (myVariable2 as string).toUpperCase();

//type inference- cannot assign any other type value to the variable b othet=r than number, by default it refers to the type number as a numerical value is assigned to varible b
let b = 20;

//no type inference - by default the varible a hold no type since no value is assigned to the variable at declaration
let a;
a = 10;
a = 20;

//union of types
let multiType: number | boolean;
multiType = 20;
multiType = false;

//FUNCTIONS
function add(num1: number, num2?: number) {
  if (num2) {
    return num1 + num2;
  } else return num1;
}
console.log(add(2, 7));
add(2);

//INTERFACE

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Preeti",
  lastName: "Boddeti",
};

fullName(p);

//Class

class Employee {
  public employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Preeti");
console.log(emp1.employeeName);
emp1.greet();

//inheritance
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

//access modifiers - public - accessible outside the class, private - cannot be acceses by outside classes, to have the variable be accessed within the derived class and not outside the derived class then use protected
