const QS = document.querySelector(".qs");
// console.log("hello everyone");

function swap(ele1, ele2) {
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;
}

async function partitionProcedure(D, st, ed) {
    let i = st - 1;
    D[ed].style.backgroundColor = "red";

    for (let j = st; j <= ed - 1; j++) {
        D[j].style.backgroundColor = "blue";

        await waitFunction(sp);

        if (parseInt(D[j].style.height) < parseInt(D[ed].style.height)) {
            i++;
            swap(D[i], D[j]);

            D[j].style.backgroundColor = "orange";
            if (i != j) D[j].style.backgroundColor = "orange";

            await waitFunction(sp);
        }
        else {
            D[j].style.backgroundColor = "purple";
        }
    }
    i++;

    await waitFunction(sp);

    swap(D[i], D[ed]);
    D[ed].style.backgroundColor = "purple";
    D[i].style.backgroundColor = "green";

    await waitFunction(sp);

    for (let k = 0; k < D.length; k++) {
        if (D[k].style.backgroundColor != "green") {
            D[k].style.backgroundColor = "cyan";
        }
    }

    return i;
}

async function quickSort(D, st, ed) {
    if (st < ed) {
        let pivotIndex = await partitionProcedure(D, st, ed);
        await quickSort(D, st, pivotIndex - 1);
        await quickSort(D, pivotIndex + 1, ed);
    }
    else {
        if (st >= 0 && ed >= 0 && st < D.length && ed < D.length) {
            D[ed].style.backgroundColor = "green";
            D[st].style.backgroundColor = "green";
        }
    }
}

QS.addEventListener('click', async function () {
    flipOldPage();
    dropBtn.innerHTML = "Quick Sort Running";
    fadeOutFunction();
    deactivateBtns();
    let D = document.querySelectorAll(".common-class");
    let S = D.length - 1;
    await quickSort(D, 0, S);
    fadeInFunction();
    activateBtns();
    dropBtn.innerHTML = 'Select Sorting Algo';
    flipNewPage();
    infoHeading.innerHTML = "Successfully Completed Quick Sort Algorithm."
    IMG[0].setAttribute("src","Images/quickSort1.png");
    IMG[1].setAttribute("src","Images/quickSort2.png");
})