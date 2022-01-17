import { renderMovies } from "../render.js";
import { loadMovieAPI } from "../api.js";
import { moviePageMain } from "../movieMain.js";
import { filterToday } from "../filter.js";

export const loadMoviePage = async () => {
  const data = await loadMovieAPI();
  const container = document.querySelector(".movies");
  container.innerHTML = "";
  moviePageMain();
  renderMovies(filterToday(data));
};
