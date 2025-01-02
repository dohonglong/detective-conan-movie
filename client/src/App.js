import { Routes, Route } from "react-router-dom";
import MovieListPage from "./components/MovieListPage";
import CharacterListPage from "./components/CharacterListPage";
import MoviePage from "./components/MoviePage";
import CharacterPage from "./components/CharacterPage";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/movie/:movieTitle" element={<MoviePage />} />
        <Route path="/character/:characterName" element={<CharacterPage />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
