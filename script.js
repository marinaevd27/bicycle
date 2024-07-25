"use strict"
// вибір елементів
const mobileBtn = document.querySelector(".header__burger i");
const menu = document.querySelector(".header__nav ul");
//  обробник події на кнопці меню
mobileBtn.onclick = function(){
    console.log(this);
    this.classList.toggle("fa-bars")
    this.classList.toggle("fa-xmark")
    menu.classList.toggle("nav--opened")
}

// console.log(mobileBtn,menu);
