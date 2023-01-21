// Basic Types
let id: number = 5
let company: string = "Something"
let isPublished: boolean = true

let x: any = "What??"

let ids: number[] = [1,2,3,4,5]

let arr: any[] = [1,2,3, "Saurabh"]

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

//Tuple Array 
let employee: [number, string][] 

employee = [
    [1, "James"],
    [2, "Hillary"],
    [3, "What"]
]

// Union

let pid: string | number

pid = "saurabh"

//Enum
enum Direction1 {
    Up,
    Down, 
    Left,
    Right
}

enum Direction2 {
    Up = "Up",
    Down = "Down", 
    Left = "Left",
    Right = "Right"
}

// Objects

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "John"
}

// Type Assertion

let cid: any = 1
// let customerID = <number>cid

let customerID = cid as number

//Functions
function addNum(x:number, y:number): number{
    return x + y
}

function log(message: string | number){
    console.log(message)
}

// Interfaces

interface UserInterface{
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "John",
}

interface MathFunc {
    (x: number, y:number):number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


interface PersonInterface{
    readonly id: number,
    name: string
    register(): string
}


// Classes
class Person implements Person{
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad");
const bob = new Person(1, "Mike Tyson");


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position;
    }
}

const emp = new Employee(3, 'James', 'Developer')

//Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(["brad", "John", "joe"])

numArray.push("Hello");