import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=21f9bafea1695b84e3c89521bda2e86f`,
    )
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject(new Error("Failed to load reviews.")),
      )
      .then((data) => setReviews(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p>Loading movie reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <strong>Author: {author}</strong>
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
