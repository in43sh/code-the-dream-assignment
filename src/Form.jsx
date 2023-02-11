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
        <div className="form-outer">
            {isFormVisible ?
            <form className="form" onSubmit={handleSubmit}>
                <input className="form__radio" required type="radio" id="character" name="type" value="character" onChange={handleChange}/>
                <label className="form__label" htmlFor="character">Character</label><br />
                <input className="form__radio" required type="radio" id="film" name="type" value="film" onChange={handleChange} />
                <label className="form__label" htmlFor="film">Film</label><br />
                <input className="form__number" required type="number" id="number" name="id" value={formValues.id} onChange={handleChange} /><br/>
                <button className="form__submit" type="submit">Save</button>
            </form> : <View data={formValues}/>
        }
        </div>
    )
}

export default Form;