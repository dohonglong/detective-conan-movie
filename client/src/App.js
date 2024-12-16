import { Routes, Route, Link } from "react-router-dom";
import MovieListPage from "./components/MovieListPage";
import MoviePage from "./components/MoviePage";
import CharacterPage from "./components/CharacterPage";

const App = () => {
  return (
    <div>
      <nav>
        <Link className="navBarLink" to="/movies_list">
          Conan Movie
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies_list" element={<MovieListPage />} />
        <Route path="/movie/:movieID" element={<MoviePage />} />
        <Route path="/character/:characterID" element={<CharacterPage />} />
      </Routes>
    </div>
  );
};

export default App;
