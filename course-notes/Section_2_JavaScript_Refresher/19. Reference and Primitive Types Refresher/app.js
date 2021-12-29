const person = {
  name: "Max",
};
const secondPerson = {
    ...person
};
person.name = "Mark";

console.log(secondPerson);
