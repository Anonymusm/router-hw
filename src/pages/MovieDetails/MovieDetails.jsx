import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import s from "./MovieDetails.module.css";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=21f9bafea1695b84e3c89521bda2e86f`,
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(new Error("Error by loading movie details.")),
      )
      .then((data) => setMovie(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p>Loading movie details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
        <article>
      <h2>Movie Details</h2>
      {/* <img
        src={`https://image.tmdb.org/movie.poster_path`}
        alt={movie.title}
      /> */}
      <h3>{movie.title}</h3>
      <p>
        <span className={s.overview}>Overview:</span> <br></br>
        {movie.overview}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average}
      </p>
    </article>
      <Link to={`/movies/${id}/cast`}>Cast</Link>
      <Link to={`/movies/${id}/reviews`}>Reviews</Link>
    <Outlet />
    </>
  )
}
