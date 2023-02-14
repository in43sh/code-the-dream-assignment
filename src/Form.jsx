import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    id: "0",
    type: "",
  });
  const [maxInputLimit, setMaxInputLimit] = useState("0");

  const switcherHandler = (e) => {
    if (e.target.value === "character") {
      setMaxInputLimit("83");
    } else {
      setMaxInputLimit("6");
      if (parseInt(formValues.id) > 6) {
        setFormValues({ ...formValues, ["id"]: "6" });
      }
    }
    setFormValues({ ...formValues, ["type"]: e.target.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "id") {
      setFormValues({ ...formValues, ["id"]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${formValues.type}/${formValues.id}`, { state: { formValues } });
  };

  return (
    <div className="form-outer">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form__question">What are we looking for?</p>
        <br />
        <div className="form__input-container">
          <label className="form__label" htmlFor="character">
            Character
          </label>
          <input
            className="form__radio"
            required
            type="radio"
            id="character"
            name="type"
            value="character"
            onChange={(e) => switcherHandler(e)}
          />
        </div>
        <div className="form__input-container">
          <label className="form__label" htmlFor="film">
            Film
          </label>
          <input
            className="form__radio"
            required
            type="radio"
            id="film"
            name="type"
            value="film"
            onChange={(e) => switcherHandler(e)}
          />
        </div>
        {maxInputLimit !== "0" ? (
          <>
            <div className="form__input-container">
              <span className="form__search-for">
                Search for
              </span>
              <input
                className="form__number"
                min="1"
                max={maxInputLimit}
                required
                type="number"
                id="number"
                name="id"
                value={formValues.id}
                onChange={handleChange}
              />
            </div>

            <button className="form__submit" type="submit">
              Submit
            </button>
          </>
        ) : (
          <></>
        )}
      </form>
    </div>
  );
};

export default Form;
