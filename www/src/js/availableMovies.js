import { loadMovieAPI } from "./api";
import { createElement } from "./commercial";
import { filterToday } from "./filter";

export const availableMovies = async () => {
  const data = await loadMovieAPI();
  let date = new Date();
  //get tomorrow
  let getTomorrow = date;
  getTomorrow.setDate(getTomorrow.getDate() + 1);
  let tomorrow = formatDateToString(getTomorrow);

  let availableForToday = filterToday(data);
  let availableForTomorrow = data.filter((item) =>
    item.date.includes(tomorrow)
  );
  //sort start time of movie
  sortFunc(availableForToday);
  sortFunc(availableForTomorrow);

  //make lists in today
  availableForToday.forEach((item) => {
    createLists(item, "today");
  });

  //make lists in tomorrow
  availableForTomorrow.forEach((item) => {
    createLists(item, "tomorrow");
  });
  if (availableForTomorrow.length === 0) {
    let warning = document.querySelector(".tomorrow");
    let span = createElement("span", "warning");
    span.innerText = `There is no available movies`;
    span.style.fontFamily = "anton";
    span.style.color = "grey";
    warning.appendChild(span);
  }
};

//when current day is 31, then it sets to 1 for the next day I suppose..
function formatDateToString(date) {
  let dd = (date.getDate() < 10 ? "0" : "") + date.getDate();
  let MM = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  let year = date.getFullYear();
  return year + "-" + MM + "-" + dd;
}

//create lists
const createLists = (item, className) => {
  const todayContainer = document.querySelector(`.${className}`);
  const ul = createElement("ul", "movieListUi");
  const li = createElement("li", "movieListLi");
  li.innerHTML = `${item.time}:00 <i class="fas fa-ticket-alt ticketIcon"></i> ${item.title} 99:-`;
  ul.appendChild(li);
  todayContainer.appendChild(ul);
};

//sorting time
const sortFunc = (item) => {
  item.sort(function (a, b) {
    return a.time - b.time;
  });
};
