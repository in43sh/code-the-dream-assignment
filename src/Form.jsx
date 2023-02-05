export const Form = () => {
    return (
        <form>
            <input type="radio" id="character" name="type_of_choice" value="Character" />
            <label for="character">Character</label><br />
            <input type="radio" id="film" name="type_of_choice" value="Film" />
            <label for="film">Film</label><br />
            <input type="number" id="number" name="" value="Film" /><br/>
            <input type="button" value="go" />
        </form>
    )
}

export default Form;