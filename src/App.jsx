// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from './Form';
import { Character } from "./Character";
import { Film } from "./Film";

function App() {
  // const navigate = useNavigate();
  // const [formValues, setFormValues] = useState({
  //   id: "",
  //   type: ""
  // })

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   console.log(name, value)
  //   setFormValues({ ...formValues, [name]: value})
  // }

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(formValues);
  //     setFormValues(false);
  //     navigate(`/film/${formValues.id}`, {state: {formValues}})
  // }

 return (
  <BrowserRouter>
    <Routes>
        <Route path="/" index element={<Form/>} />
        <Route path="/character/:id" index element={ <Character />} />
        <Route path="/film/:id" element={ <Film />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App;