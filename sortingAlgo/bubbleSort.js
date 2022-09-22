const BS = document.querySelector(".bs");

function swap(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

async function bubbleSortAlgorithm() {
  let D = document.querySelectorAll(".common-class");
  var s = D.length;
  for (let i = 0; i < s - 1; i++) {
    for (let j = 0; j < s - i - 1; j++) {
      let num1 = parseInt(D[j].style.height);
      let num2 = parseInt(D[j + 1].style.height);
      D[j].style.backgroundColor = "#928bc7";
      D[j + 1].style.backgroundColor = "#928bc7";
      if (num1 > num2) {
        await waitFunction(sp);
        swap(D[j], D[j + 1]);
      }
      D[j].style.backgroundColor = "#41729f";
      D[j + 1].style.backgroundColor = "#41729f";
    }
    D[s - 1 - i].style.backgroundColor = "#05ed94";
  }
  D[0].style.backgroundColor = "#05ed94";
  
  activateBtns();
  dropBtn.innerHTML = 'Select Sorting Algo';
  fadeInFunction();
  infoHeading.innerHTML = "Successfully Completed Bubble Sort Algorithm."
  IMG[0].setAttribute("src","Images/bubbleSort1.png");
  IMG[1].setAttribute("src","Images/bubbleSort2.png");
}

BS.addEventListener('click', function () {
  flipOldPage();
  dropBtn.innerHTML = "Bubble Sort Running";
  fadeOutFunction();
  deactivateBtns();
  bubbleSortAlgorithm();
  flipNewPage();
});

