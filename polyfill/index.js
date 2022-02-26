//Polyfill is a piece of code, that developer expects from a browser to provide natively. If it's not available in the browser, you being a developer, use your logics and implement the solution.

var arr=[1,2,3,4,5]

// forEach()
// .forEach() function comes quite handy when we just need to iterate an array.
// This function is quite useful because we don't need to implement for loop from scratch, hence saving our time and a lot of crap on the developer screen.

Array.prototype.myForEach=function(callBack){
  for (let i = 0; i < this.length; i++) {
    callBack(this[i],i,this)
  }
}
console.log("myForEach")
arr.myForEach((element)=>(console.log(element)))

// .map()
// .map() is very much similar to .forEach() method, except for the fact, that instead of returning items out of the array, it return the array itself.
// .map() is used to iterate over the array, and do some manipulation in it with the items and then after doing that so, returns the manipulated array.

Array.prototype.myMap=function(callBack){
  let newArray=[]
  for (let i=0;i<this.length;i++){
    newArray.push(callBack(this[i],i,this))
  }
  return newArray
}

console.log("myMap")
arr.myMap((element)=>(console.log(element)))

// .filter()
// .filter() is very much similar to map() function except for the fact, it is used based on the context, where we decide what kind of items do we want in the resulting array.
// Let's filter out Logic's greatest albums according to ratings
Array.prototype.myFilter=function(callBack){
  let newArray=[]
  for (let i=0;i<this.length;i++){
    if (callBack(this[i],i,this)){
      newArray.push(this[i])
    }
  }
  return newArray
}

console.log("myFilter")
console.log(arr.myFilter((element)=>element%2==0))


// .reduce()
// reduce() function is used to reduce the array to a single value. We'll again take the example of Logic's best work yet and combine all of them in a single line using .reduce() function.
// .reduce() accepts a callback function (accumulator, currentValue, index and array) and initial valu
Array.prototype.myReduce=function(callBack,intialValue){
  let accumulator=intialValue ;
  for(let i=0;i<this.length;i++){
   if(accumulator){
    accumulator=callBack(accumulator,this[i],i,this)
   }else{
     accumulator=this[i]
   }
  }
  return accumulator
}
console.log("myReduce")
console.log(arr.myReduce((a,element,index)=>index+a ,0))