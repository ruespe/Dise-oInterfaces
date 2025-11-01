import "boxicons/css/boxicons.min.css";

let botonModo = document.querySelector(".cambiarModo");
let modoGuardado = localStorage.getItem("modo")

if(modoGuardado){
  document.body.classList.add(modoGuardado)
}else{
  document.body.classList.add("light-mode")
}

botonModo.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.replace("light-mode", "dark-mode");
    localStorage.setItem("modo", "dark-mode")
  } else{
    document.body.classList.replace("dark-mode", "light-mode");
    localStorage.setItem("modo", "light-mode")
  }
});
