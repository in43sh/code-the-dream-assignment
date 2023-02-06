import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import View from './View';

export const Form = () => {
    const navigate = useNavigate();
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
        navigate(`/${formValues.type}/${formValues.id}`, {state: {formValues}})
    }

    const [isFormVisible, setIsFormVisible] = useState(true)
    const inputFileRef = useRef();

    return (
        <>
            {isFormVisible ?
            <form onSubmit={handleSubmit}>
                <input required type="radio" id="character" name="type" value="Character" onChange={handleChange}/>
                <label htmlFor="character">Character</label><br />
                <input required type="radio" id="film" name="type" value="Film" onChange={handleChange} />
                <label htmlFor="film">Film</label><br />
                <input required type="number" id="number" name="id" value={formValues.id} onChange={handleChange} /><br/>
                <button type="submit">Save</button>
            </form> : <View data={formValues}/>
        }
        </>
    )
}

export default Form;