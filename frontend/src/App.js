import { BrowserRouter,Routes, Route } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Single from "./Pages/Single.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/post/:id" element={<Single/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
