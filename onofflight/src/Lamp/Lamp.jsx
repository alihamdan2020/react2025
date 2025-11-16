import style from './style.module.css'
export default function Lamp({state}){
return(
    <div className={style.circle} 
    style={{backgroundColor:state==='on' ? 'green' : 'red'}}>
    </div>
)
}