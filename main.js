"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello world ";
console.log(message);
//VARIABLE DECLARATIONS
var x = 10;
var y = 20;
//let and const variables cannot be declared multiple times
//the let variable can be declared
var sum;
//the const variables cannoy be declared, it has to be assigned with a value
var title = "typescript tutorial";
//VARIABLE TYPES
// boolean, number and string types
var isBeginner = true;
var total = 0;
var name = "preeti";
var sentence = "my name is ".concat(name);
console.log(sentence);
//null and undefines - sub types of all other types
var n = null;
var u = undefined;
// let myName: string = undefined;
//Arrays
var list = [1, 2, 3];
var list2 = [1, 2, 3];
//Arrays - mixed types - tuples
var person1 = ["Chris", 11];
//enum values
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
//any  - what a variable type to be
var random = 10;
random = true;
random = "preeti";
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
//unknown
var myVariable2 = 10;
// (myVariable2 as string).toUpperCase();
//type inference- cannot assign any other type value to the variable b othet=r than number, by default it refers to the type number as a numerical value is assigned to varible b
var b = 20;
//no type inference - by default the varible a hold no type since no value is assigned to the variable at declaration
var a;
a = 10;
a = 20;
//union of types
var multiType;
multiType = 20;
multiType = false;
//FUNCTIONS
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
console.log(add(2, 7));
add(2);
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Preeti",
    lastName: "Boddeti",
};
fullName(p);
//Class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Preeti");
console.log(emp1.employeeName);
emp1.greet();
//inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
//access modifiers - public - accessible outside the class, private - cannot be acceses by outside classes, to have the variable be accessed within the derived class and not outside the derived class then use protected
