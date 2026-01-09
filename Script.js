window.onload = function() {
  CalculoEdad();
};

function Desplegar() {
    var n = document.getElementsByClassName("navbar-collapse")[0]
    if (n.classList.contains("collapse"))
        n.classList.remove("collapse");
    else
        n.classList.add("collapse");
}

function CalculoEdad(){
    const date = new Date();
    const birthDate = new Date(2000, 11);
    
    document.getElementById("edad").textContent = (date.getFullYear() - birthDate.getFullYear()).toString();
}