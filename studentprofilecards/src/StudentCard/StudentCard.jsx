import styles from "./StudentCard.module.css"

export default function StudentCard(props){
let states=props.grade>=90 ? "excellent" : (props.grade >=60 && props.grade<90) ? "good" : "bad"
    return (
        <div className={`${styles.card} ${styles[states]}`}>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.grade}</h3>
        </div>
    )
}