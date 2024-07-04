// Exercises

let value: unknown = 'a';
if (typeof value === 'string')
  console.log(value.toUpperCase());

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
