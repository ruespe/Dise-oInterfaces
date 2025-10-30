import 'boxicons/css/boxicons.min.css'

document.querySelector("#modos").addEventListener("change", function() {
    if (this.value === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});