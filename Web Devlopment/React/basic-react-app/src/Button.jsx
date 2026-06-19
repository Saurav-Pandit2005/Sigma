function handleClick(){
    console.log("Ckicked me.!");
}

function handleMouseover(){
    console.log("Mouse Over...!!!");
}

function handledblClick(){
    console.log("You Doubled Clicked");
}

export default function Button(){
    return(
        <>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseover}> Hello Saurav...</p>
            <button onDoubleClick={handledblClick}>Double Clicked me!!!</button>
        </>
    )
}