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