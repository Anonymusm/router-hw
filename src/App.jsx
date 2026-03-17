import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Movies from "./pages/Movies/Movies"; // Виправлено шлях
import MovieDetails from "./pages/MovieDetails/MovieDetails"; // Виправлено шлях
import Cast from "./components/Cast/Cast"; // Виправлено шлях
import Reviews from "./components/Reviews/Reviews"; // Виправлено шлях

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
export default App;
