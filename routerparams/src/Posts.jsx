import Card from "./Card"
export default function Posts(props) {


let postsArr=props.posts.map((post)=>{
    return <Card key={post.id} {...post} />
})
    return(<div className="container">
    {postsArr}
  </div>)
}