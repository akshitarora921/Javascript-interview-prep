//function deligation
// Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

let form =document.querySelector('#form')


const handleChange=(event)=>{
  console.log(event.target.name,event.target.value)
  
}

function debouncing(callback, delay=300){
  let timer;
  return(...args)=>{
    clearTimeout(timer);
    timer= setTimeout(()=>callback.apply(this,args),delay)
  }
}

form.addEventListener('input', debouncing(handleChange))