const BES = document.querySelector(".bes");
const BesDiv = document.querySelector(".bes-div");
var arr = [];
var s = 50;
var h1 = document.createElement("h3");
var h2 = document.createElement("h3");
// var h3 = document.createElement("h3");
// var h4 = document.createElement("h3");

async function colorFunction(low,high,mid,e)
{  

    e[mid].style.backgroundColor = "orange";
    e[low].style.backgroundColor = "lightgreen";
    e[high].style.backgroundColor = "#05ed94";
    await waitFunction(2000);
    e[low].style.backgroundColor = "#ce90de";
    e[mid].style.backgroundColor = "#ce90de";
    e[high].style.backgroundColor = "#ce90de";
}

async function binarySearch() {
    
    let low, high, mid, num;
    low = 0, high = s - 1;
    mid = Math.floor((low+high)/2);

    num = Math.floor((Math.random()*49)+1);
    num = arr[num];
    h1.innerHTML = `We are finding : ${num}`;
    
    
    let e = document.querySelectorAll(".common-class");
    
    colorFunction(low,high,mid,e);
    
    while (low <= high) 
    {
        mid = Math.floor((low + high) / 2);
        await waitFunction(2500);
        
        h2.innerHTML = `Low = ${low} , Mid = ${mid} , High = ${high}`;
        
        if (arr[mid] === num) {
            
            h2.innerHTML = `Found the element  =  ${arr[mid]}`;
    
            e[mid].style.backgroundColor = "orange";
            await waitFunction(2500);
            
            console.log(arr[mid]);
            break;
        }
        else if (arr[mid] < num) {
            low = mid;
            colorFunction(low,high,mid,e);
        }
        else {
            high = mid;
            colorFunction(low,high,mid,e);
        }
    }

    // await waitFunction(1500);
    // e[low].style.backgroundColor = "#ce90de";
    // e[mid].style.backgroundColor = "#ce90de";
    // e[high].style.backgroundColor = "#ce90de";

    activateBtns();
    fadeInFunction();
    infoHeading.innerHTML = "Successfully Completed Binary Search Algorithm."
    dropBtn.innerHTML = 'Select Algorithm';
    flipNewPage();
    IMG[0].setAttribute("src","Images/bubbleSort1.png");
    IMG[1].setAttribute("src","Images/bubbleSort2.png");
}

function displayArray() {
    for (let i = 0; i < s; i++) {
        let e = document.createElement("div");
        let h = document.createElement("h6");
        e.classList.add("new-margins");
        e.classList.add("common-class");
        e.style.height = `${arr[i]*7}px`;
        e.style.width = `${700/s}px`;
        h.innerHTML = `${arr[i]}`;
        h.style.color = "white";
        e.appendChild(h);
        bgDiv.appendChild(e);
    }
    h1.classList.add("text-styling");
    h2.classList.add("text-styling");
    h1.classList.add("btn-margins");
    h2.classList.add("btn-margins");
    bgDiv.appendChild(h1);
    bgDiv.appendChild(h2);
}

function createNewArr() {
    for (let i = 0; i < s; i++) {
        arr[i] = i + 1;
    }
}

BES.addEventListener('click', function () {
    dropBtn.innerHTML = 'Binary Search';
    flipOldPage();
    fadeOutFunction(); 
    deactivateBtns();
    deletePreviousContent();
    createNewArr();
    displayArray();
    binarySearch();
});
