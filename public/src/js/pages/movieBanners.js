import { loadMovieAPI } from "../api";
import { filterUpcoming, filterToday } from "../filter";
import { createElement } from "../commercial";
export const renderBanners = async () => {
  const data = await loadMovieAPI();
  //make upcoming movies in main container
  const upcomingMovies = filterUpcoming(data);
  upcomingMovies.forEach((movie) => {
    bannerElem(movie, "comingSoon");
  });

  //make current movies in main container
  const currentMovies = filterToday(data);
  currentMovies.forEach((movie) => {
    bannerElem(movie, "onCinemaNow");
  });
};

//function to movies
function bannerElem(movie, containerName) {
  const container = document.querySelector(`.${containerName}`);
  const movieIndex = createElement("div", "movieIndex");
  const movieTitle = createElement("span", "movieBannerTitle");
  const movieDate = createElement("span", "movieBannerDate");
  movieDate.innerText = `${movie.date[0]}`;
  movieTitle.innerText = `${movie.title}`;
  const img = createElement("img", "movieBanner");
  img.src = movie.bannerImg;
  movieIndex.appendChild(movieDate);
  movieIndex.appendChild(movieTitle);
  movieIndex.appendChild(img);
  container.appendChild(movieIndex);
}
