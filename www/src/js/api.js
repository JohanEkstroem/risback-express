export const loadMovieAPI = async () => {
  try {
    const response = await fetch("./src/data.json");
    const data = await response.json();
    return data.movies;
  } catch (error) {
    console.log(error);
  }
};
