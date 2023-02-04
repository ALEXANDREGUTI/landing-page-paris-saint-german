const menuHamburguer = document.getElementById("menu-hamburguer");

menuHamburguer.addEventListener("click", hamburguerMenu)

function hamburguerMenu(){
    menuHamburguer.classList.toggle('ativado');
}