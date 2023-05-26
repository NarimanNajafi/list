const sideLeft = document.querySelector("#sideLeft");
const sideRight = document.querySelector("#sideRight");
const allLeftBtn = document.querySelector("#allLeftBTN");
const allRightBtn = document.querySelector("#allRightBTN");
const oneLeftBtn = document.querySelector("#oneLeftBTN");
const oneRightBtn = document.querySelector("#oneRightBTN");

allRightBtn.addEventListener("click", function (event) {
    const childrens = sideLeft.querySelectorAll("div");
    allLeftBtn.classList.remove("disabled");
    allRightBtn.classList.add("disabled");
    allRightBtn.classList.add("clicked");
    childrens.forEach(element => {
        sideRight.appendChild(element)
    });

});

allLeftBtn.addEventListener("click", () => {
    const childrens = sideRight.querySelectorAll("div");
    allLeftBtn.classList.add("disabled");
    allRightBtn.classList.remove("disabled");
    allLeftBtn.classList.add("clicked");
    childrens.forEach(element => {
        sideLeft.appendChild(element)
    });

});

oneRightBtn.addEventListener("click", function (event) {
    const childrens = sideLeft.querySelectorAll('input[type="checkbox"]');
    oneRightBtn.classList.add("clicked");
    childrens.forEach(element => {
        if (element.checked) {
            element.checked = false;
            sideRight.appendChild(element.parentNode);
        }
    });

    if (!sideLeft.querySelectorAll("div").length) {
        oneRightBtn.classList.add("disabled");
        oneLeftBtn.classList.remove("disabled");
    }
});

oneLeftBtn.addEventListener("click", function (event) {
    const childrens = sideRight.querySelectorAll('input[type="checkbox"]');
    oneLeftBtn.classList.add("clicked");
    childrens.forEach(element => {
        if (element.checked) {
            element.checked = false;
            sideLeft.appendChild(element.parentNode);
        }
    });

    if (!sideRight.querySelectorAll("div").length) {
        oneLeftBtn.classList.add("disabled");
        oneRightBtn.classList.remove("disabled");
    }
});