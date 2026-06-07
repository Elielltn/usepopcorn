import type { typeMovie } from "../types/typeMovie";

type numResultsProps = {
  movies: typeMovie[];
};

function NumResults({ movies }: numResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResults;
