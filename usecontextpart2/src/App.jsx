import { useState } from 'react'
import Header from "./Header"
import Body from "./Body"
import { AppContext } from './Context'

function App() {

  const [show, setShow] = useState(true)

  function changeStatus() {
    setShow(!show)
  }

  return (
    <AppContext.Provider value={{ show, changeStatus }}>
      <div style={{ margin: "20px auto", width: "80vw" }}>
        <Header />
        <Body />
      </div>
    </AppContext.Provider>
  )
}

export default App
