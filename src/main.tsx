import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeProvider from "./context/ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/ged-website/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </BrowserRouter>,
)
