import { Routes, Route } from "react-router-dom";
import MovieListPage from "./components/MovieListPage";
import MoviePage from "./components/MoviePage";
import CharacterPage from "./components/CharacterPage";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies_list" element={<MovieListPage />} />
        <Route path="/movie/:movieTitle" element={<MoviePage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
      </Routes>
    </div>
  );
};

export default App;
