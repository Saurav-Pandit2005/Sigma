function handleSubmitButton(event){
    event.preventDefault();
    console.log("Button was Submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleSubmitButton}>
            <input placeholder="Write Something" />
            <button> Submit </button>
        </form>
    )
}