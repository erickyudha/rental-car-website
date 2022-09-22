class Component {
    constructor() {
        if (this.constructor === Component) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    render() {
        return
    }
}