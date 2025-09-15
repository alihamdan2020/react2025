export const dynamicStyle=((value)=>{
    return {
        fontSize:"20px",
        color : value > 0  ? "green" : value< 0 ? "red" : "black"
    }
})