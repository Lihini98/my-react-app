import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Grades from "./pages/Grades";
import GradeSix from "./pages/GradeSix";
import References from "./pages/References";
import PageNotFound from "./pages/PageNotFound";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/grade/6" element={<GradeSix />} />
          <Route path="/references" element={<References />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;