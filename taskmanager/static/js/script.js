document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialization
    const datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialization
    const selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
});