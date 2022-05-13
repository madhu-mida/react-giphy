import "./form.sass"

const Form = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        props.getGiphy()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="click-button" type="submit" value="Click to Get Giphy" />
            </form>
        </div>
    );
}

export default Form;