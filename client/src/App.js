import { Routes, Route, Link } from "react-router-dom";
// import DataSignIn from "./components/DataSignIn";
import ConanMovie from "./components/ConanMovie";
import OneMovie from "./components/OneMovie";

const App = () => {
  return (
    <div>
      <nav>
        {/* <Link className="navBarLink" to="/">
          Register
        </Link> */}
        <Link className="navBarLink" to="/conan">
          Conan Movie
        </Link>
      </nav>

      <Routes>
        {/* <Route path="/" element={<DataSignIn />} /> */}
        <Route path="/" element={<ConanMovie />} />
        <Route path="/conan" element={<ConanMovie />} />
        <Route path="/movie/:id" element={<OneMovie />} />
      </Routes>
    </div>
  );
};

export default App;
