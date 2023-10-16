let age = 10;
let dayOfWeek = "Tuesday";

if (age < 2) {
  console.log("Children under 2: free");
} else if (age < 13) {
  console.log("Children under 13: $5");
} else if (age >= 65) {
  console.log("Adults 65 or older $6");
} else {
  console.log("All others: $8");
}

if (dayOfWeek === "Tuesday") {
  console.log();
}

function sayHello() {
  console.log("Hello world");
  console.log("Another line of code");
}

const sayHelloArrow = () => {
  console.log("Hello arrow");
  console.log("More lines of code");
};

function greetByName(firstName) {
  console.log("Hello " + firstName);
}

sayHello();
sayHelloArrow();
greetByName();
