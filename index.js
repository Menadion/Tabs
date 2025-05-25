const one = document.getElementById("one").addEventListener("click", changeTextOne);
const two = document.getElementById("two").addEventListener("click", changeTextTwo);
const three = document.getElementById("three").addEventListener("click", changeTextThree);

let mtext = document.getElementById("main-text");
let stext = document.getElementById("sub-text");

function changeTextOne() {
    mtext.innerHTML = "First tab text.";
    stext.innerHTML = "Lorem";
}

function changeTextTwo() {
    mtext.innerHTML = "Second tab text.";
    stext.innerHTML = "Ipsum";
}

function changeTextThree() {
    mtext.innerHTML = "Third tab text.";
    stext.innerHTML = "Dolor";
}