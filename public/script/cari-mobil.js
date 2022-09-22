window.addEventListener("resize", () => {
    changeDropWidth();
})

initDropSelectBtn();
initTextInput();

const app = new App();

app.init().then(app.run);