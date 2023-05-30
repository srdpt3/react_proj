const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FECTH_GAMES":
      return { ...state };
    default:
      return {};
  }
};

export default gameReducer;
