import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <main>
      <h1>this is header</h1>
      <Routes>
        <Route path="/" element={<h1>main heading</h1>} />
        <Route path="/hello" element={<h1>this is hello</h1>} />
        <Route path="/world" element={<h1>this is world</h1>} />
      </Routes>
      <h1>this is footer</h1>
    </main>
  )
}