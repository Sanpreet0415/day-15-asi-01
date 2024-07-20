// Numeric Types
let age: number = 25;
let largeNumber: bigint = 9007199254740991n;

// String Type
let userName: string = "John Doe"; // Using userName instead of name

// Boolean Type
let isStudent: boolean = true;

// Array Types
let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];

// Tuple Type
let person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
    North,
    East,
    South,
    West,
}

let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";

// Void Type
function logMessage(message: string): void {
    console.log(message);
}

// Null and Undefined Types
let emptyValue: null = null;
let notAssigned: undefined = undefined;

// Function with Type Annotations
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// Interface: defining an object shape
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

let newPerson: Person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 28,
};

// Type Alias: custom type name
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };

// Testing
console.log(age);
console.log(userName); // Changed to userName
console.log(isStudent);
console.log(scores);
console.log(colors);
console.log(person);
console.log(Direction);
logMessage("Hello, TypeScript!");

// Additional Observations or Learnings
// - TypeScript provides strict type-checking which helps catch errors during development.
// - Interfaces and type aliases make code more readable and maintainable by defining custom types.
// - Enums are useful for representing a set of related constants.
// - Using `any` should be minimized as it reduces type safety.
