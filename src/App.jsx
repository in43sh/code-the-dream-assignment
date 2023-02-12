import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from './Form';
import { Character } from "./Character";
import { Film } from "./Film";

function App() {
 return (
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={<Form/>} />
        <Route path="/character/:id" index element={ <Character backgroundDark={false} />} />
        <Route path="/film/:id" element={ <Film backgroundDark={true} />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;