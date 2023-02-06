import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from './Form';
import { Character } from "./Character";
import { Film } from "./Film";

function App() {
  const [formValues, setFormValues] = useState({
    id: "",
    type: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);
      setFormValues(false);
  }

 return (
  <BrowserRouter>
    <Routes>
        <Route
          path="/"
          index element={
            <Form
              handleChange={(e) => handleChange(e)}
              handleSubmit={(e) => handleSubmit(e)}
              formValues={{ formValues }}
              setFormValues={{ setFormValues }} />}
            />
        <Route path="/character" index element={ <Character />} />
        <Route path="/film" element={ <Film />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;