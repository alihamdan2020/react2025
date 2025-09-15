import Button from "./button"
export default function Heading({clickButton}){
    return(
    <header style={{padding:"20px",backgroundColor:"rgba(20,20,56,0.5)",display:"flex",justifyContent:"center"}}>
        <Button toButton={clickButton}/>
    </header>)
}