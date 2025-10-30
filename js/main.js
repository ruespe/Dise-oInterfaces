import "boxicons/css/boxicons.min.css";

let botonModo = document.querySelector(".cambiarModo");

botonModo.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else{
    document.body.classList.remove("dark-mode")
    document.body.classList.add("light-mode")
  }
});
