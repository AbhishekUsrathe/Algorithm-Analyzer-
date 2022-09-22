const MS = document.querySelector(".ms");

async function marginProcedure(D, st, md, ed) {
    const s1 = md - st + 1;
    const s2 = ed - md;

    let leftArray = new Array(s1);
    let rightArray = new Array(s2);

    for (let i = 0; i < s1; i++) {
        await waitFunction(sp);
        D[st + i].style.backgroundColor = "red";
        leftArray[i] = D[st + i].style.height;
    }
    for (let i = 0; i < s2; i++) {
        await waitFunction(sp);
        D[(md + 1) + i].style.backgroundColor = "Blue";
        rightArray[i] = D[(md + 1) + i].style.height;
    }

    await waitFunction(sp);
    let i, j, k;
    i = 0, j = 0, k = st;

    while (i < s1 && j < s2) 
    {
        await waitFunction(sp);

        if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
            if ((s1 + s2) === D.length) {
                D[k].style.backgroundColor = "green";
            }
            else {
                D[k].style.backgroundColor = "lightgreen";
            }
            // swap(D[k],leftArray[i]);
            D[k].style.height = leftArray[i];
            i++;
            k++;
        }
        else {
            if ((s1 + s2) === D.length) {
                D[k].style.backgroundColor = "green";
            }
            else {
                D[k].style.backgroundColor = "lightgreen";
            }
            // swap(D[k],rightArray[j]);
            D[k].style.height = rightArray[j];
            j++;
            k++;
        }
    }

    while (i < s1) 
    {
        await waitFunction(sp);

        if ((s1 + s2) === D.length) {
            D[k].style.backgroundColor = "green";
        }
        else {
            D[k].style.backgroundColor = "lightgreen";
        }
        // swap(D[k],leftArray[i]);
        D[k].style.height = leftArray[i];
        i++;
        k++;
    }

    while (j < s2) 
    {
        await waitFunction(sp);

        if ((s1 + s2) === D.length) {
            D[k].style.backgroundColor = "green";
        }
        else {
            D[k].style.backgroundColor = "lightgreen";
        }
        // swap(D[k],rightArray[i]);
        D[k].style.height = rightArray[j];
        j++;
        k++;
    }
}

async function margeSort(D, st, ed) {
    if (st >= ed) {
        return;
    }
    const mid = st + Math.floor((ed - st) / 2);

    await margeSort(D, st, mid);
    await margeSort(D, mid + 1, ed);
    await marginProcedure(D, st, mid, ed);
}

MS.addEventListener("click", async function () {
    
    flipOldPage();
    dropBtn.innerHTML = "Bubble Sort Running";
    fadeOutFunction();
    deactivateBtns();
    let D = document.querySelectorAll(".common-class");
    let S = parseInt(D.length) - 1;
    await margeSort(D, 0, S);
    activateBtns();
    dropBtn.innerHTML = 'Select Sorting Algo';
    fadeInFunction();
    flipNewPage();
    infoHeading.innerHTML = "Successfully Completed Marge Sort Algorithm.";
    IMG[0].setAttribute("src","Images/margeSort3.png");
    IMG[1].setAttribute("src","Images/margeSort4.png");
});
