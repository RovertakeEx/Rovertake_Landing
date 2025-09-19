import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.min.css'
import App from './App.tsx'

const root = createRoot(document.getElementById("root")!);

root.render(
  import.meta.env.DEV 
  ? (
     <StrictMode>
      <App />
    </StrictMode>
  ) 
  : (<App />)
);
