import styles from "./job.module.css"
export default function JobItem(props){

    function handleTrashClick(a){
        props.onDelete(a)
    }
    function handleUpdateClick(a){
        props.onUpdate(a)
    }

return(
<p className={styles.par}
key={props.jobId}>
    # {props.jobId} - Description : {props.jobName} 
    <button onClick={()=>handleTrashClick(props.jobId)} className={styles.btn}>remove</button>
    <i className={`fa-solid fa-pen ${styles.icon}`}   onClick={()=>handleUpdateClick(props.jobId)}></i>
   
</p>
)
}