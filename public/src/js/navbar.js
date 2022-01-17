import { loadMoviePage } from "./pages/moviepage";
import { covidInforation } from "./pages/covidInfo";

export const checking = () => {
  console.log("navbar.js is loaded");
};
const movieBtn = document.querySelector(".menuMovies");
movieBtn.addEventListener("click", () => {
  loadMoviePage();
});

const covidBtn = document.querySelector(".Covid-info");
covidBtn.addEventListener("click", () => {
  covidInforation();
});

// navbarResponsive toggles adds a class "responsive" to the hamburger button in navbar
export const navbarResponsive = () => {
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    let navbar = document.querySelector("#navbar");
    if (navbar.className === "topnav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "topnav";
    }
  });
};
