const menu = document.querySelector('.menu');
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector('.closeMenu');
openMenu.addEventListener("click", openMenuBar);
function openMenuBar(){
 console.log('beens for sale')
 menu.style.left = "20%";
}
closeMenu.addEventListener("click", closeMenuBar);
function closeMenuBar(){
 console.log('beens for sale')
 menu.style.left = "100%";
}

