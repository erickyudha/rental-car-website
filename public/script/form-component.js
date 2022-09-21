const selectInputArr = document.getElementsByClassName("select-input");
const selectBtnArr = document.getElementsByClassName("select-btn")
const selectDropArr = document.getElementsByClassName("select-dropdown");
const textInputArr = document.getElementsByClassName("text-input");
const formOverlay = document.querySelector(".overlay")

// OVERLAY FUNCTION

const checkAndToggleOverlay = (checkCondition) => {
    if (checkCondition) {
        formOverlay.classList.add("active");
    } else {
        formOverlay.classList.remove("active")
    }

}


// SELECT DROPDOWN BUTTON FUNCTIONS

const changeWidthBatch = (elementArr, targetWidth) => {
    for (let element of elementArr) {
        element.style.width = targetWidth + "px";
    }
}

const changeDropWidth = () => {
    const selectInputWidth = selectInputArr[0].offsetWidth;
    changeWidthBatch(selectDropArr, selectInputWidth);
}

const dropPlaceholderColorSetup = () => {
    const dropButtonSpan = document.querySelectorAll(".select-btn span");
    for (const span of dropButtonSpan) {
        span.style.color = "#8A8A8A";
        span.addEventListener('DOMSubtreeModified', () => {
            span.style.color = "#000";
        })
    }
}

const dropdownViewEvent = () => {
    // UNHIDE DROPDOWN WHEN FORM BUTTON CLICKED
    for (let i = 0; i < selectBtnArr.length; i++) {
        const dropdown = selectDropArr[i];
        const arrowImg = selectBtnArr[i].children[1];

        selectBtnArr[i].addEventListener("click", () => {
            dropdown.classList.toggle("active");
            arrowImg.classList.toggle("active");
            checkAndToggleOverlay(dropdown.classList.contains("active"));
        })

        selectBtnArr[i].addEventListener("focusout", () => {
            formOverlay.classList.remove("active");
            setTimeout(() => {
                dropdown.classList.remove("active");
                arrowImg.classList.remove("active");
            }, 120);
        })
    }
}

const dropdownClickEvent = () => {
    for (let i = 0; i < selectDropArr.length; i++) {
        const list = selectDropArr[i].children;
        for (let j = 0; j < list.length; j++) {
            const listItem = list[j];
            listItem.addEventListener("click", () => {
                const input = listItem.children[0]
                let text = listItem.children[1].innerHTML;
                if (input.name === "pickupTime") text += " WIB";
                selectBtnArr[i].children[0].innerHTML = text;
                input.checked = true;

                selectDropArr[i].classList.remove("active");
                formOverlay.classList.remove("active");
            })
        }
    }
}

const initDropSelectBtn = () => {
    changeDropWidth();
    dropdownViewEvent();
    dropdownClickEvent();
    dropPlaceholderColorSetup();
}


// CUSTOM TEXT INPUT COMPONENT FUNCTIONS

const textInputActiveEvent = () => {
    for (let i = 0; i < textInputArr.length; i++) {
        const input = textInputArr[i];
        const inputContainer = input.children[1]
        const inputBox = inputContainer.children[0];

        inputBox.addEventListener("click", () => {
            inputContainer.classList.toggle("active")
            checkAndToggleOverlay(inputContainer.classList.contains("active"));
        })
        inputBox.addEventListener("focusout", () => {
            formOverlay.classList.remove("active");
            setTimeout(() => {
                inputContainer.classList.remove("active");
            }, 120);
        })
    }
}

const initTextInput = () => {
    textInputActiveEvent();
}