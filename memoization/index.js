//memoization
// Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,

function memAddition(){
  let cache={}
  return (value)=>{
    if (value in cache){
      console.log("taking value from cache")
      return (cache[value])
    }else{
      console.log("calculating the value")
      let result=value+20;
      cache[value]=result
      return result
    }
  }
}

var add20 = memAddition()
console.log(add20(10))
console.log(add20(10))