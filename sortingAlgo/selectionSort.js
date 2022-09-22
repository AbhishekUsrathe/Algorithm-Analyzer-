const SS = document.querySelector(".ss");

function swap(ele1, ele2) {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

async function selectionSort() {
    var D = document.querySelectorAll(".common-class");
    var S = D.length;

    for (let i = 0; i < S; i++) {
        let min_indx = i;
        D[i].style.backgroundColor = "red";

        await waitFunction(sp);

        for (let j = i + 1; j < S; j++) {
            if (parseInt(D[j].style.height) < parseInt(D[min_indx].style.height)) {
                D[j].style.backgroundColor = "#928bc7";
                min_indx = j;
            }
        }
        swap(D[i], D[min_indx]);

        await waitFunction(sp);
        D[i].style.backgroundColor = "#05ed94";
        D[min_indx].style.backgroundColor = "#05ed94";
    }

    activateBtns();
    dropBtn.innerHTML = 'Select Sorting Algo';
    fadeInFunction();
    infoHeading.innerHTML = "Successfully Completed Selection Sort Algorithm.";
    IMG[0].setAttribute("src","Images/selectionSort1.png");
    IMG[1].setAttribute("src","Images/selectionSort2.png");
}

SS.addEventListener("click", function () {
    flipOldPage();
    dropBtn.innerHTML = 'Insertion Sort Running';
    fadeOutFunction();
    deactivateBtns();
    selectionSort();
    flipNewPage();
});