import axios from "axios";

export const getRandomMovie = () => {
  axios
    .get("http://localhost:4000/api/v1/movies/random")
    .then(response => response.json())
    .then(response => console.log(response))
    .then(response => {
      return { type: "GET_RANDOM_MOVIE", payload: response.data };
    });
};
