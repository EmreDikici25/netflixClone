import axios from "axios";
import { ActionTypes } from "../ActionTypes";

// API isteği yaparken gönderilecek
const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmQ5NjhkNTMzN2Q3Y2FiOTA3ODg2NjBiNzYxYTk1YiIsInN1YiI6IjY0YzhkZDBiMDhjZjg3MDBhYzljZWVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GhOE_ImttF26ZAVWNLTixy68PbOQHt1ZC_n9FSQymCc",
  },
};

// Axios davranışını elirleme Temel URL
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getMovies = () => (dispatch) => {
  axios.get("/movie/popular", options).then((res) =>
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data.results,
    })
  );
};

// Kategori verilerini almak için aksiyon
export const getGenres = () => (dispatch) => {
  // Kategori verisini çekme isteği
  axios
    .get("/genre/movie/list", options)
    // Veriyi store a aktar
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    );
};

// Custom hook

export const fetchByUrl = async (url) => {
  const res = await axios.get(url, options);
  return res.data;
};
