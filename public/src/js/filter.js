const currentDay = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()}`;

export const filterToday = (movies) =>
  movies.filter((movie) => movie.date.includes(currentDay));

export const filterUpcoming = (movies) =>
  movies.filter((movie) => !movie.date.includes(currentDay));

export const filterChildCinema = (movies) =>
  movies.filter((movie) => movie.age < 11);
