import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from './Form';
import { Character } from "./Character";
import { Film } from "./Film";

function App() {
 return (
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={ <Form />} />
        <Route path="/character" index element={ <Character />} />
        <Route path="/film" element={ <Film />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;