class SearchCarApp {
    constructor() {
        this.loadButton = document.getElementById("search-car-btn");
        this.carContainerElement = document.getElementById("search-result");

        this.selectDriverLabel = document.querySelector(`#driver-type-input .select-input > button > span`);
        this.selectPickupDateLabel
        this.selectPickupTimeLabel = document.querySelector(`#pickup-time-input .select-input > button > span`);

        this.selectedDriverTypeSelector = 'input[name="driverType"]:checked' // NO INPUT VALUE == NULL
        this.selectedPickupTimeSelector = 'input[name="pickupTime"]:checked' // NO INPUT VALUE == NULL

        this.inputPickupDate = document.querySelector('input[name="pickupDate"]'); // NO INPUT VALUE, .value == ""
        this.inputPeopleAmount = document.querySelector('input[name="peopleAmount"]'); // NO INPUT VALUE, .value == ""

        this.calendarApplyBtn = document.querySelector('.applyBtn');
    }

    async init() {
        this.loadButton.disabled = true;

        // Register click listener
        this.loadButton.onclick = this.run;

        // FORM VALIDATIONS
        const radioLabel = [
            this.selectDriverLabel,
            this.selectPickupTimeLabel
        ]

        const textInput = [
            this.inputPickupDate,
            this.inputPeopleAmount
        ]

        const toggleSearchBtn = () => {
            this.loadButton.disabled = !this.checkInput();
        }

        radioLabel.forEach(element => {
            // identify an element to observe
            const elementToObserve = element;

            // create a new instance of 'MutationObserver' named 'observer', 
            // passing it a callback function
            const observer = new MutationObserver(function (mutationsList, observer) {
                toggleSearchBtn()
            });

            // call 'observe' on that MutationObserver instance, 
            // passing it the element to observe, and the options object
            observer.observe(elementToObserve, { characterData: false, childList: true, attributes: true });
        })

        textInput.forEach(element => {
            element.addEventListener("change", toggleSearchBtn)
        })

        this.calendarApplyBtn.addEventListener("click", () => {
            setTimeout(() => {
                toggleSearchBtn()
            }, 120);
        })
    }

    checkInput = () => {
        const currentDriverType = document.querySelector(this.selectedDriverTypeSelector);
        const currentPickupTime = document.querySelector(this.selectedPickupTimeSelector);

        let isValid = true;

        if (currentDriverType === null) isValid = false;
        if (currentPickupTime === null) isValid = false;
        if (this.inputPickupDate.value === "") isValid = false;

        /* OPTIONAL CONDITION
        if (this.inputPeopleAmount.value == "") isValid = false
        */
        function isNumeric(str) {
            if (typeof str != "string") return false // we only process strings!  
            return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
        }
        if (this.inputPeopleAmount.value !== "" && !isNumeric(this.inputPeopleAmount.value)) isValid = false;
        return isValid;
    }


    run = async () => {
        this.clear();
        await this.load();

        if (Car.list.length < 1) {
            const node = document.createElement("span");
            node.classList.add("no-result-text");
            node.innerHTML = "No Car Found...";
            this.carContainerElement.appendChild(node);
        } else {
            Car.list.forEach((car) => {
                const node = document.createElement("div");
                node.innerHTML = car.render();
                this.carContainerElement.appendChild(node);
            });
        }
    };

    async load() {
        const filterCar = car => {
            let isValid = true;

            if (!car.available) isValid = false;
            if (this.inputPeopleAmount != "" && this.inputPeopleAmount.value > car.capacity) isValid = false;

            const timezone = "+0700"
            const inputDate = this.inputPickupDate.value.split("-");
            const inputDay = inputDate[0];
            const inputMonth = inputDate[1];
            const inputYear = inputDate[2];
            const inputTime = document.querySelector(this.selectedPickupTimeSelector).value.replace(".", ":");

            // ISO 8601 time format
            const formattedInputTime = `${inputYear}-${inputMonth}-${inputDay}T${inputTime}:00${timezone}`

            const carAvailableTime = new Date(car.availableAt)
            const selectedDateTime = new Date(formattedInputTime);
            /* console.log("----------------------");
            console.log("available at: " + carAvailableTime);
            console.log("need: " + selectedDateTime);
            console.log("----------------------"); */

            if (carAvailableTime > selectedDateTime) isValid = false;

            return isValid
        }
        const cars = await Binar.listCars(filterCar);
        Car.init(cars);
    }

    clear = () => {
        let child = this.carContainerElement.firstElementChild;

        while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}