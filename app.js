const GNA = document.querySelector(".main-btn");
const bgDiv = document.querySelector(".bg-div");
const infoBox = document.querySelector(".info-box");
const dropBtn = document.querySelector(".drop-btn");
const infoHeading = document.querySelector(".info-heading");
const CK = document.querySelector(".ck");
const mainDiv = document.querySelector(".card");
const IMG = document.querySelectorAll("img");
let speed = document.querySelector(".input-speed");
let size = document.querySelector(".input-size");

const array = [];
let sp = 15;
let sz = 50;

//Delete all the previous bars.
function deletePreviousContent() {
  bgDiv.innerHTML = '';
}

//create Bars Function.
function createBoxes(array, s) {
  deletePreviousContent();
  
  for (var i = 0; i < s; i++) {
    var D = document.createElement("div");
    var H = document.createElement("h4");
    D.classList.add("margins");
    D.classList.add("common-class");
    H.innerHTML = `${array[i]}`;
    H.classList.add("main-text-style");
    // D.appendChild(H);
    D.style.height = `${array[i] * 2}px`;
    D.style.width = `${300 / s}px`;
    bgDiv.appendChild(D);
  }
}

//Creating Array Function
function createArray(sz) {
  for (var i = 0; i < sz; i++) {
    array[i] = Math.floor((Math.random() * 200) + 1);
    // console.log(array[i]);
  }
  setTimeout(createBoxes(array, sz), 3000);
}

//Waiting Function.
function waitFunction(time) {
  return new Promise(response => {
    setTimeout(() => { response('') }, time);
  })
}

// Buttons Activation or Deactivation Functions.
function deactivateBtns() {
  document.querySelector(".main-btn").disabled = true;
  document.querySelector(".bs").disabled = true;
  document.querySelector(".is").disabled = true;
  document.querySelector(".ss").disabled = true;
  document.querySelector(".ms").disabled = true;
  document.querySelector(".qs").disabled = true;
  document.querySelector(".input-size").disabled = true;
}

function activateBtns() {
  document.querySelector(".main-btn").disabled = false;
  document.querySelector(".bs").disabled = false;
  document.querySelector(".is").disabled = false;
  document.querySelector(".ss").disabled = false;
  document.querySelector(".ms").disabled = false;
  document.querySelector(".qs").disabled = false;
  document.querySelector(".input-size").disabled = false;
}

// All click Events 
size.addEventListener('input', function () {
  sz = parseInt(size.value);
  createArray(sz);
});

createArray(sz);

speed.addEventListener('input', function () {
  sp = parseInt(speed.value);
});

GNA.addEventListener('click', function () {
  fadeOutFunction();
  createArray(sz);
  flipOldPage()
});


//Styling Function;
function fadeInFunction() {
  let op = 0;
  for (var i = 0; i < 3; i++) {
    infoBox.style.opacity = op;
    op += 0.3;
  }
  infoBox.style.transform = "translateY(50px)";
  infoBox.style.transition = "1s";
  infoBox.style.opacity = "1";
  infoBox.style.color = "white";
}

function fadeOutFunction() {
  let op = 0;
  for (var i = 0; i < 2; i++) {
    infoBox.style.opacity = op;
    op -= 0.6;
  }
  op = 0;
  infoBox.style.transform = "translateY(-50px)";
  infoBox.style.top = "-2rem";
}

function flipNewPage()
{
  CK.addEventListener('click',function()
  {
    mainDiv.classList.add("hovercard");
  });
}
function flipOldPage()
{ 
  mainDiv.classList.remove("hovercard");
}