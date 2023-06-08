import React, { useEffect } from "react";
import { loadGames } from "../actions/gamesActions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Game from "../components/Game";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

//Styling and Animation
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // GET that data back

  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GameList>
      <h2> upcoming Games</h2>

      <Games>
        {upcoming &&
          upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
      <h2> New Games</h2>

      <Games>
        {newGames &&
          newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
      <h2> Popular Games</h2>
      <Games>
        {popular &&
          popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
