import { movieCards } from "./movieCards.js";

export const renderMovies = (data) => {
  const container = document.querySelector(".card-ctn");
  container.innerHTML = "";
  data.forEach((item) => {
    movieCards(item);
  });
};
