import type { typeWatchedMovies } from "../types/typeWatchedMovies";
import WatchedMovie from "./WatchedMovie";

type watchedMovieListProps = { watched: typeWatchedMovies[] };

function WatchedMovieList({ watched }: watchedMovieListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
