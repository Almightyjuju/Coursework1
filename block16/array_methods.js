const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 3, name: "quq", price: 13 },
];
const promptName = prompt(
  "enter a name of an item, we will try and find it",
  "foo"
);

let foundItem = items.find((val) => {
  if (found) {
    console.log("we found it");
    console.log(found);
  } else {
    console.log(`we could not find an item with the name ${promptName}`);
  }
});
console.log("found item:");

const mappedValues = items.map((item) => item[keyForMapping]);
console.log("Mapped Values", mappedValues);
