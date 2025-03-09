document.getElementById("parent").style.border="1px solid black"

document.getElementById("parent").style.height="200px";

document.getElementById("parent").style.backgroundColor="blue";


let element = document.createElement("button")

element.innerText="submit";

element.style.backgroundColor="red"

element.style.padding="10px"

document.getElementById("parent").append(element)