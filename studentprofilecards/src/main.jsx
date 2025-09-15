import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const myRoot=createRoot(document.getElementById('root'))
myRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
