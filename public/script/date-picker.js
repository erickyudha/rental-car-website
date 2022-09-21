const dateRange = $('input[name="pickupDate"]');

dateRange.daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minDate: new Date(),
    maxYear: 2030,
    showDropdowns: false,
    autoUpdateInput: false,
    "applyButtonClasses": "btn-success",
    "cancelClass": "hidden",
    locale: {
        format: "DD/MM/YYYY",
        applyLabel: "Pilih Tanggal",
        monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        daysOfWeek: [
            "S",
            "M",
            "T",
            "W",
            "T",
            "F",
            "S"
        ],
    }
});

const dateInputBox = document.querySelector(".date-input .input-container");


dateRange.on("show.daterangepicker", () => {
    dateInputBox.classList.toggle("active");
    checkAndToggleOverlay(dateInputBox.classList.contains("active"))
})
dateRange.on("hide.daterangepicker", () => {
    dateInputBox.classList.remove("active");
    checkAndToggleOverlay(false)
})

dateRange.on('apply.daterangepicker', function (ev, picker) {
    dateRange.val(picker.startDate.format('DD-MM-YYYY'));
});
