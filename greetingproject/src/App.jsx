import Greeting from "./Greeting/Greeting"

function App() {
const peoples =[
  { name: "Ali", title: "man", age: "45", succedd: true },
  { name: "Sara", title: "woman", age: "25", succedd: false },
  { name: "Ahmad", title: "man", age: "45", succedd: true },
  { name: "Samira", title: "woman", age: "25", succedd: false },
  { name: "faten", title: "woman", age: "45", succedd: true },
  { name: "laila", title: "woman", age: "25", succedd: true }
];

const greetings=peoples.map((people,index)=>{
  return <Greeting name={people.name} age={people.age} succed={people.succedd} title={people.title} key={index}/>
})

  return (
    <>
    {/* <Greeting name="ali" title="man" age="25" succed={true}/>
    <Greeting name="sarah" title="woman" age="55" succed={true}/>
    <Greeting name="ahmad" title="MAN" age="55" succed={false}/> */}
    {greetings}
    </>
  )
}

export default App
