class Component {
    constructor(renderId) {
        if (this.constructor === Component) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.renderId = renderId;
        this.renderTarget = document.getElementById(renderId);
    }

    render() {
        // this.renderTarget.innerHTML = element;
    }
}