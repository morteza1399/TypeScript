let employee: {
  readonly id: number;
  name: string;
  retrie: (date: Date) => void;
} = {
  id: 1,
  name: "Morteza",
  retrie: (date: Date) => {
    console.log(date);
  },
};

let date = new Date();
employee.retrie(date);
