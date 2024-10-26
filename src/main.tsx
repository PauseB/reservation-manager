import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Red1234 } from './Red1234'
import { Counter } from './pages/Counter'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
