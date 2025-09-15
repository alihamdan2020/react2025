export default function EventHandler() {
    function handleGreet() {
        console.log("hello every one")
    }
    function handleWelcome(name) {
        console.log(`hello ${name}`)
    }

    function handleInputChange(e) {
        console.log(e.target.value)
    }
    return (
        <>
            <button onClick={handleGreet} style={{marginBlock:"10px"}}>click without parameter</button>  <br />
            <button onClick={() => handleWelcome('ali')} style={{marginBlock:"10px"}}>click with a parameter</button> <br />
            <input type="text" onChange={handleInputChange} style={{marginBlock:"10px"}}/>

        </>
    )
}