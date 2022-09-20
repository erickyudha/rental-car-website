window.addEventListener("resize", () => {
    changeDropWidth();
})

const start = () => {
    changeDropWidth();
    dropdownViewEvent();
    dropdownClickEvent();
    textInputActiveEvent();
}

start()