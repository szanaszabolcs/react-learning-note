const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 25,
};
console.table(newPerson);
