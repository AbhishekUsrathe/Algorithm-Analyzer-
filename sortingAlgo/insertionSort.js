const IS = document.querySelector(".is");
// console.log("hello");

function swap(ele1, ele2) {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

async function insertionSort() {
    let D = document.querySelectorAll(".common-class");
    let S = D.length;
    D[0].style.backgroundColor = "#05ed94";

    for (let i = 1; i < S; i++) {
        let key = parseInt(D[i].style.height);
        // console.log(key);
        let j = i - 1;

        D[i].style.backgroundColor = "#41729f";
        await waitFunction(sp);

        while (j >= 0 && key < parseInt(D[j].style.height)) {
            D[j].style.backgroundColor = "#41729f";
            swap(D[j + 1], D[j]);
            // D[j+1].style.height = D[j].style.height;
            j--;

            await waitFunction(sp);

            for (var x = i; x >= 0; x--) {
                D[x].style.backgroundColor = "#05ed94";
            }
        }

        D[j + 1].style.height = key;

        D[j + 1].style.backgroundColor = "#05ed94";
    }
    activateBtns();
    dropBtn.innerHTML = 'Select Sorting Algo';
    fadeInFunction();
    infoHeading.innerHTML = "Successfully Completed Insertion Sort Algorithm."
    IMG[0].setAttribute("src","Images/insertionSort1.png");
    IMG[1].setAttribute("src","Images/insertionSort2.png");
}

IS.addEventListener('click', function () {
    flipOldPage();
    dropBtn.innerHTML = 'Insertion Sort Running';
    fadeOutFunction();
    deactivateBtns();
    insertionSort();
    flipNewPage();
});
