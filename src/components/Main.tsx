import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";
import type { typeMovie } from "../types/typeMovie";
type mainProps = {
  movies: typeMovie[];
};

function Main({ movies }: mainProps) {
  return (
    <main className="main">
      <ListBox movies={movies}/>
      <WatchedBox />
    </main>
  );
}

export default Main;
