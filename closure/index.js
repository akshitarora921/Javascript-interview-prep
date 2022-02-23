//Closure

// Closure is a combination of function and its lexical enviroment within which the function is declared.
// Closure has 3 Scope chains:
// 1. Own scope variables defined b/w its curly braces
// 2. Outer function scope variabl
// 3. Global varibles

function welcome(name) {
  var greetInfo = function (message) {
    console.log(message + name);
  };
  return greetInfo;
}

var myFunction = welcome("John");

myFunction("Welcome Mr. ");

// As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.
