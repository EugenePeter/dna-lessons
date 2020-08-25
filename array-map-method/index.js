const my_array = ["bacon", "eggs", "sliced_bread", "rice", "hotdog", "ham"];

// Traverse
let i = 0;
const traverse = (arr, fn) => {
  for (i; i < arr.length; i++) {
    myValue = arr[i];
    fn(myValue, i);
  }
};

const traverseWithMapping = (arr, fn) => {
  const newArray = [];
  for (i; i < arr.length; i++) {
    myValue = arr[i];
    newArray[i] = fn(myValue, i);
  }
  return newArray;
};

const display = (param, i) => {
  console.log(i, param);
};

const displayWithPrefix = (param, i) => {
  console.log(`${i} - My Breakfast is`, param);
  return param;
};

const viandWithGreeting = (param, i) => {
  return `${param} for Breakfast`;
};

// traverse( my_array, displayWithPrefix )
console.log(my_array);
const a = my_array.map(viandWithGreeting);

console.log(a);
