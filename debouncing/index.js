//Debouncing
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

var debouceHandleChange = debounceWrapper(majorfunction)

debounceInput.addEventListener('input',debouceHandleChange)