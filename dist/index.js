"use strict";
// Basic Types
let id = 5;
let company = "Something";
let isPublished = true;
let x = "What??";
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, 3, "Saurabh"];
//Tuple
let person = [1, 'Brad', true];
//Tuple Array 
let employee;
employee = [
    [1, "James"],
    [2, "Hillary"],
    [3, "What"]
];
// Union
let pid;
pid = "saurabh";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerID = <number>cid
let customerID = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Brad");
const bob = new Person(1, "Mike Tyson");
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'James', 'Developer');
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "John", "joe"]);
numArray.push("Hello");
