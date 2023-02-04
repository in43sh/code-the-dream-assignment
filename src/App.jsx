import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Character } from "./Character";
import { Film } from "./Film";

function App() {
 return (
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={ <Character />} />
        <Route path="/film" element={ <Film />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;