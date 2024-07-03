// aliases => variables name must be PascallCase
type Employee = {
  readonly id: number;
  name: string;
  retrie: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Morteza",
  retrie: (date: Date) => {
    console.log(date);
  },
};

let date = new Date();
employee.retrie(date);
