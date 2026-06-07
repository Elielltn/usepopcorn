import { useState } from "react";
import MovieList from "./MovieList";
import type { typeMovie } from "../types/typeMovie";

type listBoxProps = {
  movies: typeMovie[]
}

function ListBox({movies}: listBoxProps) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies}/>}
    </div>
  );
}

export default ListBox;
