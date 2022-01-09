let name = {
  firstname: "Akshit",
  lastname: "Arora",
};
let printFullName = function (place, state) {
  console.log(
    this.firstname + " " + this.lastname + " lives in " + place + ", " + state
  );
};

// call(this-object, function-parameters)
// invoke the fuction directly
printFullName.call(name, "Kaithal", "Haryana");

// apply (this-object, [array of parameters])
// invoke the fuction directly
printFullName.apply(name, ["Kaithal", "Haryana"]);

// bind=> return a copy of function with the parameters attached to it (DOES NOT CALL THE FUCTION)
let name2 = {
  firstname: "Amit",
  lastname: "thakur",
};
let printFullName2 = printFullName.bind(name2, "Yamunanagar", "Haryana");

printFullName2();
