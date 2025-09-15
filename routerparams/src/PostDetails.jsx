import { useParams } from "react-router-dom"

export default function PostDetails(props) {
    const {postId}=useParams()

    let post=props.allPosts.find((onePost)=>{
        return parseInt(postId)===onePost.id
    })
    return(<>
    <p>id : {post.id}</p>
    <p>title : {post.title}</p>
    <p>body : {post.body}</p>
    </>)
}