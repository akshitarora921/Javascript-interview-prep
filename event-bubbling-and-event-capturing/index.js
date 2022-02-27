// Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. The event propagation mode determines in which order the elements receive the event.

// With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

// With capturing, the event is first captured by the outermost element and propagated to the inner elements.

// Capturing is also called "trickling", which helps remember the propagation order:

// trickle down, bubble up

// addEventListener(event-name,callback function, isCapture=false)
// event.stopPropagation(); to stop event to pass further down or up

var grandparent = document.querySelector("#grandparent");
var parent = document.querySelector("#parent");
var child = document.querySelector("#child");

grandparent.addEventListener("click", (event) => {
  console.log("grandparent Clicked");
});

parent.addEventListener("click", (event) => {
  console.log("parent Clicked");
});

child.addEventListener("click", (event) => {
  console.log("child Clicked");
  //   event.stopPropagation();
});
