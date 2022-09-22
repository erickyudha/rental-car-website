const driverInput = new DropdownInput(
    "Pilih Tipe Driver",
    "driver-type-input",
    "/img/form-arrow-down.svg",
    "Tipe Driver",
    "driverType",
    {
        "Dengan Sopir": "withDriver",
        "Tanpa Sopir (Lepas Kunci)": "noDriver"
    },
    "form-overlay"
)
driverInput.render();
driverInput.init();

const pickupTimeInput = new DropdownInput(
    "Pilih Waktu",
    "pickup-time-input",
    "/img/form-arrow-down.svg",
    "Waktu Jemput/Ambil",
    "pickupTime",
    {
        "8.00": "8.00",
        "9.00": "9.00",
        "10.00": "10.00",
        "11.00": "11.00",
        "12.00": "12.00"
    },
    "form-overlay"
)
pickupTimeInput.render();
pickupTimeInput.init();

initTextInput();

const searchCarApp = new SearchCarApp();
searchCarApp.init();