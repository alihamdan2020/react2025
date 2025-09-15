export default function ToDoItem(props){
    
    function handleClickTrash(a){
       props.onDelete(a)
    }
    return (
        // <p>Job number : {props.jobId} - Job to do is : {props.jobName}</p>
        <p>Job number : {props.jobId} - Job to do is : {props.jobName} -
        <button onClick={()=>handleClickTrash(props.jobId)}>delete</button></p>
    )
}