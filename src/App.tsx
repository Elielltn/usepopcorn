import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import type { typeMovie } from "./types/typeMovie";
import { tempMovieData } from "./constants/movies";
import type { typeWatchedMovies } from "./types/typeWatchedMovies";
import { tempWatchedData } from "./constants/movies";

export default function App() {
  const [movies, setMovies] = useState<typeMovie[]>(tempMovieData);
  const [watched, setWatched] = useState<typeWatchedMovies[]>(tempWatchedData);
  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
