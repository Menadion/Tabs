const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

one.addEventListener("click", changeTextOne);
two.addEventListener("click", changeTextTwo);
three.addEventListener("click", changeTextThree);

let mtext = document.getElementById("main-text");
let stext = document.getElementById("sub-text");

function changeTextOne() {
    mtext.innerHTML = "First tab text.";
    stext.innerHTML = "Lorem";
    
    one.classList.add("current");
    two.classList.remove("current");
    three.classList.remove("current");
}

function changeTextTwo() {
    mtext.innerHTML = "Second tab text.";
    stext.innerHTML = "Ipsum";

    one.classList.remove("current");
    two.classList.add("current");
    three.classList.remove("current");
}

function changeTextThree() {
    mtext.innerHTML = "Third tab text.";
    stext.innerHTML = "Dolor";

    one.classList.remove("current");
    two.classList.remove("current");
    three.classList.add("current");
}