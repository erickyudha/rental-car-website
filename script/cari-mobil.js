const selectInputArr = document.getElementsByClassName("select-input");
const selectDropArr = document.getElementsByClassName("select-dropdown");

const changeWidthBatch = (elementArr, targetWidth) => {
    for (let element of elementArr) {
        element.style.width = targetWidth + "px";
    }
}

const changeDropWidth = () => {
    const selectInputWidth = selectInputArr[0].offsetWidth;
    changeWidthBatch(selectDropArr, selectInputWidth);
}

window.addEventListener("resize", () => {
    changeDropWidth();
})

changeDropWidth();