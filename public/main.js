"use strict";
console.log("Working");

const filters = document.querySelectorAll("main > aside > ul > li"); 

const toggleDropDown = (e) => {
    console.log(e);
    e.target.querySelector("ul").classList.toggle("show");
}
filters.forEach(filter => filter.addEventListener("click", toggleDropDown) );