import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Todo from './BasicTodo.jsx'
import './BasicTodo.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todo />
  </StrictMode>,
)
