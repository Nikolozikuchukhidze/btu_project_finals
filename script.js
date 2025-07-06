let burger = document.querySelector(".burger");
let x_Mark = document.querySelector(".x_mark");
let mobileMenu = document.querySelector(".header_nav");
burger.addEventListener("click", () => {
    mobileMenu.style.left = "0px";
    x_Mark.style.display = "block";
    burger.style.display = "none";
});

x_Mark.addEventListener("click", () => {
    mobileMenu.style.left = "-100%";
    x_Mark.style.display = "none";
    burger.style.display = "block";
});

let btnElement = document.getElementById("btn-click")
btnElement?.addEventListener("click", function(){
    alert("you have successfully sent a massage!")
    })