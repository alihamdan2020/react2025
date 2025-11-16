import './greeting.css'
export default function Greeting(props) {
    // let post
    // if (props.title.toLowerCase()==="man")
    // {

    //      post="Mr";
    // }
    // else
    // {
    //     post="Miss";
    // }
    const post=props.title.toLowerCase()==="man" ? "Mr" : "Miss";
    return(
       <h1 className={props.succed ? 'success' : 'failed'}>Hello, {post} {props.name} you have {props.age}!</h1>
    //    <h1>Hello, {props.title.toLowerCase()==='man' ? 'Mr' : 'Miss'} {props.name} you have {props.age}!</h1>
    )
}