// everything in javascript is an object
// prototype are the predefined methods which are provided by javascript like array have .length or functions have call, apply and bind
// we can see all the prototypes of an object using "object.__proto__"

let object = {
  firstname: "akshit",
  lastname: "arora",
};
console.log(object.__proto__);

// now lets see for fuctions
let fun = function () {};
// function prototype can be length or map which it self return and object, so, we can use fun.__proto__.__proto__ which will be same as object.__proto as fun.__proto__ is an object
console.log(fun.__proto__.__proto__);

// we can modify the prototype which I will add later.
