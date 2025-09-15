export default function Button({toButton}){
    function handleChangeStatus(){
        toButton()
    }
    return(<>
    <button onClick={handleChangeStatus}>click to show or hide heading</button>
    </>)
}