//currying
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. 
// Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
 
function add(a,b,c){
  return a+b+c
}

console.log("add",add(1,2,3))

// const curryAdd=a=>b=>c=>a+b+c;
function curryAdd(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}

console.log("curryAdd",curryAdd(1)(2)(3))


// let make for 1,2,3,4,5,......

function recuringAdd(a){
  return function(b){
    if(b){
      return recuringAdd(a+b)
    }else{
      return a
    }
  }
}

console.log("recuringAdd",recuringAdd(1)(2)(3)(4)(5)(6)())
