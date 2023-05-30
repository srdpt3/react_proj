import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from "../api";

//Action Creator

export const loadGames = () => async (dispatch2) => {
  const params = {
    params: {
      key: "fb3238928e42496186ba12f60a181af2",
    },
  };

  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL(), params);
  const newGamesData = await axios.get(newGamesURL(), params);
  const upcomingData = await axios.get(upcomingGamesURL(), params);
  dispatch2({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
