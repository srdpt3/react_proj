import { combineReducers } from "redux";
import gamesReducer from "./gameReducers";

const initState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return {};
  }
};

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});

export default rootReducer;
