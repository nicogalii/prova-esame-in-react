import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./routes/Home";
import "./App.scss";
import Details from "./routes/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
