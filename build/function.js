"use strict";
// tipe data pada balikan function
// string type return
function getName() {
    return 'Hello My Name is Luthfi';
}
console.log(getName());
// number type return
function getAge() {
    return 123;
}
console.log(getAge());
// void function
function printName() {
    console.log('print name');
}
printName();
///////////////////////////////
// argument type data
function multiply(value1, value2) {
    return value1 * value2;
}
const result = multiply(2, 5);
console.log(result);
let age;
const Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (firstName = 'Luthfi', lastName = 'Aziz') => {
    return firstName + ' ' + lastName;
};
console.log(fullName());
// optional parameter
const getUmur = (value1, value2) => {
    return value1 + (value2 !== null && value2 !== void 0 ? value2 : 0);
};
console.log(getUmur(20, 40));
