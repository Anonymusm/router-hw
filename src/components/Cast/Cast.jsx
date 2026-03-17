import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=21f9bafea1695b84e3c89521bda2e86f`,
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(new Error("Error cast.")),
      )
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p>Loading movie cast...</p>;
  if (error) return <p>{error}</p>;

return (
  <>
    <h3>Cast</h3>
    {movie.cast && movie.cast.length > 0 ? (
      <ul>
        {movie.cast.map(({ id, name, character }) => (
          <li key={id}>
            <p><strong>{name}</strong></p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>Not information about the cast for this movie.</p>
    )}
  </>
);

}
