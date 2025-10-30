//import './scss/main.scss';


document.querySelector("#modos").addEventListener("change", function() {
    if (this.value === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});