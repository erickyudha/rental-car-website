const selectInputArr = document.getElementsByClassName("select-input");
const selectBtnArr = document.getElementsByClassName("select-btn")
const selectDropArr = document.getElementsByClassName("select-dropdown");

const radioNameArr = ["driverType"]

const changeWidthBatch = (elementArr, targetWidth) => {
    for (let element of elementArr) {
        element.style.width = targetWidth + "px";
    }
}

const changeDropWidth = () => {
    const selectInputWidth = selectInputArr[0].offsetWidth;
    changeWidthBatch(selectDropArr, selectInputWidth);
}

const dropdownViewEvent = () => {
    // UNHIDE DROPDOWN WHEN FORM BUTTON CLICKED
    for (let i = 0; i < selectBtnArr.length; i++) {
        selectBtnArr[i].addEventListener("click", () => {
            const dropdown = selectDropArr[i];
            if (dropdown.classList.contains("active")) {
                dropdown.classList.remove("active");
            } else {
                dropdown.classList.add("active");
            }
        })
    }

    for (let i = 0; i < selectDropArr.length; i++) {
        const element = selectDropArr[i].children;
    }
}

const dropdownClickEvent = () => {
    for (let i = 0; i < selectDropArr.length; i++) {
        const list = selectDropArr[i].children;
        for (let j = 0; j < list.length; j++) {
            const listItem = list[j];
            listItem.addEventListener("click", () => {
                const input = listItem.children[0]
                const text = listItem.children[1].innerHTML;
                selectBtnArr[i].children[0].innerHTML = text;
                input.checked = true;

                selectDropArr[i].classList.remove("active");
            })
        }
    }
}

window.addEventListener("resize", () => {
    changeDropWidth();
})

const start = () => {
    changeDropWidth();
    dropdownViewEvent();
    dropdownClickEvent();
}

start()





/* console.log(selectInputArr[0].children);
let selectedInputNum = null;



const radio1 = document.getElementsByName("driverType")
console.log(radio1); */