import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import type { typeMovie } from "./types/typeMovie";
import { tempMovieData } from "./constants/movies";

export default function App() {
  const [movies, setMovies] = useState<typeMovie[]>(tempMovieData);
  return (
    <>
      <NavBar movies={movies}/>
      <Main movies={movies}/>
    </>
  );
}
