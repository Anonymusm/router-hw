import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/MoviesContext";

export default function HomePage() {
  const { movies, setMovies } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=21f9bafea1695b84e3c89521bda2e86f",
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error by loading movies.");
        }
        return res.json();
      })
      .then((data) => setMovies(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <section>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
