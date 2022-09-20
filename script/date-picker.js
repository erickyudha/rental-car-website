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

dateRange.on('apply.daterangepicker', function (ev, picker) {
    dateRange.val(picker.startDate.format('DD-MM-YYYY'));
});

