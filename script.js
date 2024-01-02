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

// const flight = "LB999";
// const moses = { name: "moses mwangi", passport: 23575398932 };

// const check = function (flightNun, passager) {
//   flightNun = "LG90";
//   passager.name = "MR" + " " + passager.name;
//   if (passager.passport === 23575398932) {
//     alert("check In");
//   } else {
//     alert("wrong passport");
//   }
// };
// check(flight, moses);
// console.log(flight);
// console.log(moses);

// const newPass = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000000);
// };
// newPass(moses);
// check(flight, moses);

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

/////////////////////////returning function////////////

//const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
//};

// const greet = (greeting) =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greetHey = greet("Hey");
greetHey("mwangi");
greet("Hello")("moses");*/

const luft = {
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
