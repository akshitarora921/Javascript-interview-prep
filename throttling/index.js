//throttling
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");

function print(message) {
  console.log(message);
}

function throttleWrapper(callback, delay = 1000) {
  let isThrottling;
  return (...args) => {
    if (!isThrottling) {
      isThrottling = true;
      setTimeout(() => {
        callback(...args);
        isThrottling = false;
      }, delay);
    }
  };
}

button1.addEventListener("click", () => {
  print("basic");
});
button2.addEventListener(
  "click",
  throttleWrapper(() => {
    print("throttling");
  })
);
