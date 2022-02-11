"use strict";
const filters = document.querySelectorAll("main > aside > ul > li"); 
const toggleDropDown = (e) => {
    e.target.classList.toggle("active");
    if(e.target.querySelector("ul"))
        e.target.querySelector("ul").classList.toggle("show");
}
filters.forEach(filter => filter.addEventListener("click", toggleDropDown) );