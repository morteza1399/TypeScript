// nullables type
function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase());
  else 
    console.log("Hola !");
    
}

greet(undefined);

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
