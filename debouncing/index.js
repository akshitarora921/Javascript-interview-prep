//Debouncing
// It means that in the search bar example, the user can type all the four letters. Still, only x milliseconds after the last onPress() call was triggered, the function executes.
var normalInput = document.querySelector('#normalInput');
var debounceInput = document.querySelector('#debounceInput');
normalInput.addEventListener('input',majorfunction)

function majorfunction(e){
  console.log(e.target.id,e.target.value)
}

function debounceWrapper(callback, delay=300){
  let timer;
  return (...arg)=>{
    clearTimeout(timer);
    timer = setTimeout(callback.bind(this,...arg),delay)
  }
}

debounceInput.addEventListener('input',debounceWrapper(majorfunction))