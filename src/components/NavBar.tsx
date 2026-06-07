import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";
import type { typeMovie } from "../types/typeMovie";

type navBarProps = {
  movies: typeMovie[];
};

function NavBar({ movies }: navBarProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies}/>
    </nav>
  );
}

export default NavBar;
