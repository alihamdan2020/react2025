import { useState } from "react"
import styles from "./Form.module.css"

export default function Form() {
    const countries=[
        "lebanon","syria","jordan","qatar","ksa"
    ]

    const optionCountries=countries.map((country,index)=>{
        return <option value={index} key={index}>{country}</option>
    })

    const [userName,setUserName]=useState("")
    const [selCountry,setSelCountry]=useState("-1")
    const [gender,setGender]=useState("male")
    const [isMarried,setIsMarried]=useState(false)
    
    function handleUserName(e){
        setUserName(e.target.value)
        console.log(e.target.value)
    }
    
    function handleSelectCountry(e){
        setSelCountry(e.target.value)
        console.log(e.target.value)
    }

  function handleSubmit(e) {
    e.preventDefault(); // stop refresh
   if(selCountry==="-1" || userName==='')
   return

   let maritalStatus=isMarried ? "married" : "not married"
    alert(`Name: ${userName}\nCountry: ${countries[selCountry]}\nGender: ${gender}\nMarried? ${maritalStatus}` );
  };

    return (
        <div style={{width:"800px",margin:"20px auto",border:"2px solid black",padding:"20px"}}>
            <form action="" method="" onSubmit={handleSubmit} >
                <div className={styles.group_level}>
                    <label className={styles.label}>user name</label>
                    <input type="text" value={userName} onChange={handleUserName}/>
                </div>
                 <div className={styles.group_level}>
                    <label  className={styles.label}>select country</label>
                    <select onChange={handleSelectCountry} value={selCountry}>
                         <option value="-1">--Select Country--</option>
                        {optionCountries}
                    </select>
                </div>

                 <div className={styles.group_level}>
                    <label className={styles.label}>select gender</label>
                    <label>Male <input type="radio"  checked={gender==="male"} onChange={()=>setGender("male")}></input></label>
                    <label>Female <input type="radio"  checked={gender==="female"} onChange={()=>setGender("female")}></input></label>
                </div>
                <div>
                    <label className={styles.label}>maried</label><input type="checkbox" checked={isMarried} onChange={()=>setIsMarried(!isMarried)} />
                </div>

        <button type="submit">Submit</button>

            </form>
        </div>
    )
}