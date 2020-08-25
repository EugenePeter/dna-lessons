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

let j = 0;

// const hamFinder = ( expression ) => {
//   return expression == 'ham'
// }

const baconFinder = (expression) => {
  return expression == "bacon";
};

const hotdogFinder = (expression) => {
  return expression == "hotdog";
};

const burgerFinder = (expression) => {
  return expression == "burger";
};

const traverseAndFind = (arr, fn) => {
  let found;
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    found = fn(myValue) ? myValue : null;

    if (found) {
      break;
    }
  }

  return found;
};

const traverseAndCheck = (arr, fn) => {
  let found;
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    found = fn(myValue) ? myValue : null;

    if (found) {
      break;
    }
  }

  return found ? true : false;
};

// Find Burger
// Find using Burger Finder

// const selected = traverseAndFind( my_array, burgerFinder  )
const otherSelected = my_array.find(hotdogFinder);

const food_menu = [
  {
    price: 10,
    item: "burger",
  },
  {
    price: 5,
    item: "balls",
  },
  {
    price: 20,
    item: "bacon",
  },
  {
    price: 5,
    item: "ham",
  },
  {
    price: 5,
    item: "balls",
  },
  {
    price: 5,
    item: "balls",
  },
  {
    price: 30,
    item: "egg",
  },
  {
    price: 5,
    item: "hotdog",
  },
  {
    price: 5,
    item: "balls",
  },
  {
    price: 5,
    item: "lumpia",
  },
  {
    price: 5,
    item: "balls",
  },
];

// const hamFinder = ( menu_entry ) => {
//   return menu_entry.item == 'ham'
// }

const OOP_Ham = (arr, menu_entry) => {
  let found;
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    found = myValue.item == menu_entry ? myValue : null;

    if (found) {
      break;
    }
  }

  return found;
};

const FP_Ham = (arr, fn) => {
  let found;
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    found = fn(myValue) ? myValue : null;

    if (found) {
      break;
    }
  }

  return found;
};

const hamFinder = (menu_entry) => {
  return menu_entry.item == "ham";
};

// Find Ham
// const myHam = OOP_Ham( food_menu, 'ham')

// Find using Ham Finder
// const myOtherHam = FP_Ham( food_menu, hamFinder )

const myOtherHam = food_menu.find(hamFinder);

const OOP_PriceFilter = (arr, expression) => {
  let found = [];
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    const found_item = myValue.price == expression ? myValue : null;

    if (found_item) {
      found.push(myValue);
    }
  }

  return found;
};

const FP_GenericFilter = (arr, fn) => {
  let found = [];
  for (j; j < arr.length; j++) {
    const myValue = arr[j];

    const found_item = fn(myValue) ? myValue : null;

    if (found_item) {
      found.push(myValue);
    }
  }

  return found;
};

const isPriceEqual5 = (item) => {
  return item.price === 5;
};

const isPriceEqual10 = (item) => {
  return item.price === 10;
};

const isHam = (item) => {
  return item.item === "ham";
};

// const items_priced_5 = OOP_PriceFilter( food_menu, 5 )

// const items_priced_10 = food_menu.filter( isPriceEqual5 )

// console.log(`Selected: `, items_priced_10 )

function SortByPriceAscending(a) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i].price > x[i + 1].price) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

function SortByPriceDescending(a) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i].price < x[i + 1].price) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

const sortPriceAsc = (item_a, item_b) => {
  return item_a.price < item_b.price;
};

const sortPriceDesc = (item_a, item_b) => {
  return item_a.price > item_b.price;
};

const sortNameDesc = (item_a, item_b) => {
  return item_a.item[0] > item_b.item[0];
};

function functionalSort(a, fn) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (fn(x[i], x[i + 1])) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

// // const price_sorted_asc = functionalSort( food_menu, sortPriceAsc )
// const price_sorted_desc = functionalSort( food_menu, sortNameDesc  )

// const price_sorted_asc = food_menu.sort( sortPriceAsc)

// console.log(`Sorted: `, price_sorted_asc )

const reduceToShowSalePrice = (result_string, item) => {
  return "" + result_string + "\n" + `${item.item} has price ${item.price}`;
};

const reduceShowTotalPriceOfSaleItems = (total_so_far, item) => {
  return total_so_far + item.price;
};

const reduceShowAveragePrice = (total_so_far, item) => {
  return (total_so_far + item.price) / 2;
};

const reduceConvertToObject = (total_so_far, item) => {
  const name = item.item;
  delete item.item;
  return {
    ...total_so_far,
    [name]: item,
  };
};

const equalPrice = (total, current) => {
  return total.find((item) => item.price == current.price);
};

const equalItem = (total, current) => {
  return total.find((item) => item.item == current.item);
};

const reduceByDistinct = (evalFn) => {
  const reducerFn = (current_items, toBeEvaluatedItem) => {
    if (evalFn(current_items, toBeEvaluatedItem)) {
      return current_items;
    }

    return [...current_items, toBeEvaluatedItem];
  };

  return reducerFn;
};

const traverseReduce = (arr, fn, initialValue) => {
  let total = initialValue;
  for (i; i < arr.length; i++) {
    myValue = arr[i];
    total = fn(total, arr[i], i);
  }
  return total;
};

const my_selections = food_menu.reduce(reduceByDistinct(equalPrice), []);

console.log(`food_menu`, food_menu);

console.log(`selections`, my_selections);
