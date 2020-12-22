const menu = document.querySelector('.menu');
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener("click", openMenuBar);
function openMenuBar(){
menu.style.right = "20%";
};
closeMenu.addEventListener("click", closeMenuBar);
function closeMenuBar(){
 menu.style.right = "100%";
 
}

