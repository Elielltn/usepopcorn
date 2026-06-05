import { useState } from "react";
import { tempMovieData } from "../constants/movies";
import type { typeMovie } from "../types/typeMovie";
import Movie from "./Movie";
   
function MovieList() {
  const [movies, setMovies] = useState<typeMovie[]>(tempMovieData);
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
