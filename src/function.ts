// tipe data pada balikan function

// string type return
function getName(): string {
  return 'Hello My Name is Luthfi';
}
console.log(getName());

// number type return
function getAge(): number {
  return 123;
}
console.log(getAge());

// void function
function printName(): void {
  console.log('print name');
}
printName();

///////////////////////////////

// argument type data
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
const result = multiply(2, 5);
console.log(result);

// function add(val1, val2) {
//   return val1 + val2;
// }
// console.log(add('dasa', 123));

// function as type
type Age = number;
let age: Age;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};
