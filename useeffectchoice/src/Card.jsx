export default function Card({id,title,body,name,username,email}){
return(
    <div key={id}>
      <p>id : {id}</p>
      {title!==undefined ? <p>title : {title}</p> : <></>}
      {body!==undefined ?<p>body : {body}</p> : <> </> }
      {name!==undefined ?<p>name : {name}</p> : <> </> }
      {username!==undefined ?<p>username : {username}</p> : <> </> }
      {email!==undefined ?<p>name : {email}</p> : <> </> }
      </div>
)
}
//as you mention above,Card function has many parameters, but some time i pass only id title and body, another props contains only id name, for this issue i use 
//{title!==undefined ? <p>title : {title}</p> : <></>} if title does not belongs to props (undifined)  dislay empty fragment