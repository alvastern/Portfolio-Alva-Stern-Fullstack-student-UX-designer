'use strict';

// Hamburgermeny för tablets och mobila enheter
let menuButton = document.querySelector("header section button");
let nav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});
