const hamburger =document.querySelector(".nav_hamburger");
const linkContainer =document.querySelector(".nav_menu");
const link =document.querySelectorAll(".nav_menu_link");

hamburger.addEventListener("click",() =>{
    linkContainer.classList.toggle("active");
    hamburger.classList.toggle("active");
});
window.addEventListener("resize", () => {
    if(window.matchMedia("(max-width: 550px)").matches){
        closeMenu();
    }
});


if(window.matchMedia("(max-width: 550px)").matches){
    closeMenu();
}

function closeMenu() {
    link.forEach((link) => {
        link.addEventListener("click",() => {
            linkContainer.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
}