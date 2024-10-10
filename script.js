"use strick";

///////////////////////// modal game ///////////////////////////////

// document.querySelector(".modal").classList.remove("hidden");
// document.querySelector(".overlay").classList.remove("hidden");
const modalEl = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeMOdal = document.querySelector(".close-modal");
const overlayEl = document.querySelector(".overlay");

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", function () {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  });

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});
document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && modalEl.classList.contains("hidden")) {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
  }
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
  }
});

// /const creatBooking = function (flight, plane = 1, air = 5) {
//   // plane ||= 1;
//   // air ||= 5;
//   const Booking = { flight, plane, air };
//   console.log(Booking);
// };
// creatBooking("LB23");
/*
const flight = "LB999";
const moses = { name: "moses mwangi", passport: 23575398932 };

const check = function (flightNun, passager) {
  flightNun = "LG90";
  passager.name = "MR" + " " + passager.name;
  if (passager.passport === 23575398932) {
    alert("check In");
  } else {
    alert("wrong passport");
  }
};
check(flight, moses);
console.log(flight);
console.log(moses);

const newPass = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000000);
};
newPass(moses);
check(flight, moses);
*/
/////////// function accepting call back///////////
/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), others].join(" ");
};

const word = function (str) {
  const split = str.split(" ");

  return split;
};
//////////// high order function ////////////////////

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed : ${fn.name}`);
};
transformer("Javascript is just awesome", upperWord);
transformer("Javascript is just awesome ????", oneWord);
transformer("Javascript is just awesome ////////////", word);
*/
/////////////////////////returning function////////////

/*const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};*/

/*const greet = (greeting) =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };*/

/*const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHey = greet("Hey");
greetHey("mwangi");
greet("Hello")("moses");*/

////////////////////////// calll and aplly methods/////////////////////

/*const luft = {
  Airline: "kenya airways",
  iatCode: "LHB",
  booking: [],

  book(flightNun, name) {
    console.log(
      `${name} book a seat on ${this.Airline} flight ${this.iatCode}${flightNun}`
    );
    this.booking.push({ flight: `${this.iatCode}${flightNun}`, name });
  },
};

console.log(luft);
luft.book(23, "moses mwangi");
luft.book(23, "mwangi");

const eurowing = {
  Airline: "Eurowings",
  iatCode: "EW",
  booking: [],
};

const book = luft.book;

book.call(luft, 900, "Wanjiro");
console.log(luft);

book.call(eurowing, 23, "sarah williams");
console.log(eurowing);

/////////apply method//////////
const flightData = [7000, "Joshua"];
// book.apply(eurowing, flightData);
//book.apply(luft, flightData);
//or//
book.call(eurowing, ...flightData);
book.call(luft, ...flightData);

//////////////////////// bind method ///////////////////
const bookEW = book.bind(eurowing);
const bookluft = book.bind(luft);

bookEW(489000, "kamashu ninja");
console.log(eurowing);
const bookSpecific = book.bind(eurowing, 5050);
bookSpecific("jonhteh");
bookSpecific("mr bundo");

///////////////// with event listner //////////////////
luft.plane = 300;
luft.buyPlane = function () {
  this.plane++;
  console.log(this.plane);
};
document
  .querySelector("body")
  .addEventListener("click", luft.buyPlane.bind(luft));*/

/*
// ////////////////// partial application /////////////////////////////
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
// const addVat = (value) => value + value * 0.23;

console.log(addVat(100));

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTax2(0.23);
console.log(addVat2(100));
// console.log(addVat2(23));
*/
///////////////// code challenge ///////////////////
/*
const poll = {
  question: "Whats your fav programming language ?",
  optional: ["Javascript", "Python", "rust", "c++"],
  answers: new Array(4).fill(0),
};
for (const [first, sec] of option.entries()) {
  console.log(`${first + 1}:${sec}`);
}

const registerNewNumber = function (quiz, option) {
  console.log(option);
  // const prime = prompt(quiz);
};

registerNewNumber(poll.question, mine);
const mine = poll.optional.entries();
*/
//////////////// imediate invoke function //////////////////////

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// (function () {
//   console.log("This will never run again");
// })();
// (() => console.log("This will ALSO never run again"))();

// {
//   const private = "This is a private propety";
// }
// console.log(private);
//////////////////////////// closure ///////////////////////////////

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

Person.prototype.work = function () {
  console.log(this.name + " is " + this.age + " years old");
};

// const person1 = new Person("Moses Mwangi", 23);
// const person2 = new Person("John Kamau", 28);

// console.log(person1, person2);
// person2.work();

// class People {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// const people1 = new People("Pete Mburu", 23);

// console.log(people1);
// people1.greet();

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set updateHeight(newHeight) {
//     this.height = newHeight;
//   }
// }

// const rect = new Rectangle(10, 5);

// console.log(rect, rect.area);
// console.log(rect.height);

// rect.updateHeight = 20;

// console.log(rect.height, rect.area);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);

//     this.breed = breed;
//   }

//   bark() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const d1 = new Dog("Buddy", "Golden Retriever");

// console.log(d1);

// d1.bark();
// d1.name;
// d1.speak();

// const arr = [10, 20, 5, 30];

// const max = Math.max(...arr);
// const min = Math.min(...arr);
// const sum = arr.reduce((a, b) => a + b);

// console.log(max);
// console.log(min);
// console.log(sum);

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// const stg = ["moses", "ambrella", "zebra", "cup"];
// const date = [
//   "2024-01-15",
//   "2023-12-25",
//   "March 1, 2024",
//   "08/10/2023",
//   new Date(2024, 5, 1),
//   "1999-09-21T09:15:00Z",
// ];
// let maxi = 0;

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i] > maxi) {
//     maxi = arr[i];
//   }
// }
// console.log(stg.sort((a, b) => b.localeCompare(a)));
// console.log(date.sort((a, b) => new Date(b) - new Date(a)));
// console.log("maxValue: ", maxi); // Output: 9
// console.log("minValue: ", min); // Output: 9

//////////////////arra looping //////////////////
const stg = ["moses", "ambrella", "zebra", "cup"];

for (let i = 0; i <= stg.length; i++) {
  console.log(stg[i]);
}

for (let value of stg) {
  console.log(value);
}

const arr1 = [1, 2, 3];
const arr2 = [2, 4, 5];

const sum = arr2.reduce((arr, cur) => arr + cur, 0);
const mult = arr2.reduce((arr, cur) => arr * cur, 1);
const max = arr2.reduce((arr, cur) => (cur > arr ? cur : arr), arr2[0]);
const min = arr2.reduce((arr, cur) => (cur < arr ? cur : arr), arr2[0]);
const compare = arr2.reduce((arr, cur) => {
  console.log(cur);
});

console.log(sum, mult, max, min);

console.log(compare);
