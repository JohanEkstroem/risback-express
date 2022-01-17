import { renderMovies } from "./render.js";
import { filterToday, filterUpcoming, filterChildCinema } from "./filter.js";
import { loadMovieAPI } from "./api.js";

const api = await loadMovieAPI();

export const moviePageMain = () => {
  const container = document.querySelector(".movies");

  const pageContainer = document.createElement("div");
  pageContainer.setAttribute("class", "movieMain-ctn");
  container.append(pageContainer);

  const viewOptions = document.createElement("div");
  viewOptions.setAttribute("class", "viewOptions");
  pageContainer.append(viewOptions);

  const title = document.createElement("h1");
  title.setAttribute("class", "page-title");
  title.innerText = "Filmer";
  viewOptions.append(title);

  /*  const list = document.createElement("a");
  list.setAttribute("id", "listView-cta");
  list.setAttribute("class", "fas fa-th-list");
  list.innerText = "Lista";
  viewOptions.append(list);

  const poster = document.createElement("a");
  poster.setAttribute("id", "posterView-cta");
  poster.setAttribute("class", "fas fa-grip-horizontal");
  poster.innerText = "Posters";
  viewOptions.append(poster); */

  const filter = document.createElement("div");
  filter.setAttribute("class", "filterOptions");
  pageContainer.append(filter);

  const today = document.createElement("a");
  today.setAttribute("id", "movies-today");
  today.setAttribute("class", "filter active");
  today.innerText = "På bio idag";
  today.addEventListener("click", () => {
    renderMovies(filterToday(api));
  });
  filter.append(today);

  const upcoming = document.createElement("a");
  upcoming.setAttribute("id", "movies-upcoming");
  upcoming.setAttribute("class", "filter");
  upcoming.innerText = "Kommande filmer";
  upcoming.addEventListener("click", () => {
    renderMovies(filterUpcoming(api));
  });
  filter.append(upcoming);

  const children = document.createElement("a");
  children.setAttribute("id", "movies-children");
  children.setAttribute("class", "filter");
  children.innerText = "Barn bio";
  children.addEventListener("click", () => {
    renderMovies(filterChildCinema(api));
  });
  filter.append(children);

  const filterBtn = document.createElement("button");
  filterBtn.setAttribute("class", "filter-btn");
  filterBtn.innerText = "Visa filter";
  filter.append(filterBtn);

  const cardCtn = document.createElement("div");
  cardCtn.setAttribute("class", "card-ctn");
  container.append(cardCtn);

  const test = document.querySelectorAll(".filter");
  test.forEach((item) => {
    item.addEventListener("click", () => {
      test.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
};
