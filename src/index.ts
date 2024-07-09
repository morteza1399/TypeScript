// Generice classes

class KeyValuePiar<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePiar<string, string>("1", "Apple");
pair.key;

// class KeyValuePiar {
//   constructor(public key: number, public value: string) {}
// }

// class StringKeyValuePiar {
//   constructor(public key: string, public value: string) {}
// }

// let pair = new StringKeyValuePiar("1", "Apple");
// pair.key

// let employee: Employee = {
//   name: "John Smith",
//   salary: 50_000,
//   address: {
//     street: "Flinders st",
//     city: "Melbourne",
//     zipCode: 3144,
//   },
// };

// interface Address {
//   street: string;
//   city: string;
//   zipCode: number;
// }

// interface Employee {
//   name: string;
//   salary: number;
//   address: Address;
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Employee extends Person {
//   constructor(public salary: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }

// class Logger {
//   constructor(public logFile: string) {}

//   log(message: string) {
//     console.log(message);
//   }
// }

// interfaces
// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// interface Calender {
//   name: string;
//   addEvent(): void;
//   removeEvent(): void;
// }

// interface CloudCalender extends Calender {
//   sync(): void;
// }

// class GoogleCalender implements Calender {
//   constructor(public name: string) {}

//   addEvent(): void {
//     throw new Error("method not implemented");
//   }

//   removeEvent(): void {
//     throw new Error("method not implemented");
//   }
// }

// abstract classes and methods
// abstract class Shape {
//   constructor(public color: string) {}

//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log("Rendering a Circle");
//   }
// }

// let shape = new Shape("red");
// shape.render();

// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   protected walk() {
//     // test private and protected keyword
//     console.log("walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     this.walk();
//     console.log("taking test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// printNames([
//   new Student(1, "John", "Smith"),
//   new Teacher("Mosh", "hamedani"),
//   new Principal("Mary", "Smith"),
// ]);

// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// let student = new Student(1, "ali", "abdi");
// student.takeTest();

// static members
// class Ride {
//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }

//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);

// index signatures
// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Morteza";
// seats.A2 = "Ali";
// console.log(seats);

// creating classes
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   despoit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }

//   // getters and setters
//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) throw new Error("Invalid value");
//     this._balance = value;
//   }
// }

// creating objects
// let account = new Account(1, "Morteza", 0);
// account.despoit(100);
// account.balance = 1;
// console.log(account.balance);

// Exercises
// let value: unknown = 'a';
// if (typeof value === 'string')
//   console.log(value.toUpperCase());

// let user = getUser();
// console.log(user?.address?.street);

// let x = foo ?? bar();

// type DayOfWeek =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";

// type Brid = {
//   fly: () => void;
// };

// type Fish = {
//   swim: () => void;
// };

// type Pet = Brid | Fish;

// let behavoirPet: Pet = {
//   fly: () => {},
//   swim: () => {},
// };

// type User = {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// let users: User[] = [
//   {
//     name: "John Smith",
//     age: 30,
//     occupation: "Software engineer",
//   },
//   {
//     name: "Kate Müller",
//     age: 28,
//   },
// ];

// never type
// function reject(message: string): never {
//   throw new Error(message);
// }

// function processEvent(): never {
//   while (true) {
//     // Read a message from a queue
//   }
// }

// processEvent();
// reject("...");
// console.log("Hello World");

// unknown type
// function render(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//   }
// }

// render("mOrteza");

// assertion type
// let button = document.getElementById("button") as HTMLButtonElement;
// button;

// let phone = <HTMLInputElement>document.getElementById("phone");
// phone;

// nulish coaelscing operator
// let speed: number | null | undefined = undefined;
// let ride = {
//   speed: speed ?? 40,
// };

// console.log(ride);

// optional chaining
// type Customer = {
//   birthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);

// console.log(customer?.birthday?.getFullYear());

// nullables type
// type Greet = string | null | undefined;

// function greet(name: Greet) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola !");
// }

// greet(undefined);

// literal type
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";
// let metricUnit: Metric = "inch"

// intersection type
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// union type => A union type is a type formed from two or more other types, representing values that may be any one of those types.
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === 'number')
//     return weight * 2.2
//   else
//     return parseInt(weight) * 2.2
// }

// kgToLbs(10);
// kgToLbs("10");

// aliases => variables name must be PascallCase
// type Employee = {
//   readonly id: number;
//   name: string;
//   retrie: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Morteza",
//   retrie: (date: Date) => {
//     console.log(date);
//   },
// };

// let date = new Date();
// employee.retrie(date);
