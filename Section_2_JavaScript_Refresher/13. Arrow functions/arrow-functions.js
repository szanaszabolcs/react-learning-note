function printMyName(name) {
  console.log(name);
}
printMyName("Szabolcs");

const printMyNameArrow = (name) => {
  console.log(name);
};
printMyNameArrow("Szabolcs");

// Prettier fix but can use like this const name = var => {}
const printMyNameArrowOneArg = (name) => {
  console.log(name);
};
printMyNameArrowOneArg("Szabolcs");

const printMyNameArrowNoArg = () => {
  console.log("Max");
};
printMyNameArrowNoArg();

const printMyNameArrowMoreArg = (name, age) => {
  console.log(name, age);
};
printMyNameArrowMoreArg("Max", 30);

const multiply = (number) => number * 2;
console.log(multiply(5));
