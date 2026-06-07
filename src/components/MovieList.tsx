import type { typeMovie } from "../types/typeMovie";
import Movie from "./Movie";

type movieListProps = {
  movies: typeMovie[];
};

function MovieList({ movies }: movieListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default MovieList;
