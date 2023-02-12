import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        id: "",
        type: ""
    })
    const [inputMaxValue, setInputMaxValue] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        // here I'm trying to change the max limit of the number that the use can
        // put into the input field but I couldn't figure out how to change it with JS
        if (value === "character") {
            setInputMaxValue(83)
        } else { setInputMaxValue(6) };
        console.log("inputMaxValue => ", inputMaxValue);
        setFormValues({ ...formValues, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setFormValues(false);
        navigate(`/${formValues.type}/${formValues.id}`, {state: {formValues}})
    }

    return (
        <div className="form-outer">
            <form className="form" onSubmit={handleSubmit}>
                <input className="form__radio" required type="radio" id="character" name="type" value="character" onChange={(e) => handleChange(e)} />
                <label className="form__label" htmlFor="character">Character</label><br />
                <input className="form__radio" required type="radio" id="film" name="type" value="film" onChange={(e) => handleChange(e)} />
                <label className="form__label" htmlFor="film">Film</label><br />
                {/* <input className="form__number" min="1" max={inputMaxValue} required type="number" id="number" name="id" value={formValues.id} onChange={handleChange} /><br/> */}
                {/* <input className="form__number" min="1" max="6" required type="number" id="number" name="id" value={formValues.id} onChange={handleChange} /><br/> */}
                <input className="form__number" min="1" max="83" required type="number" id="number" name="id" value={formValues.id} onChange={handleChange} /><br/>
                <button className="form__submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;