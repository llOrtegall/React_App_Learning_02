import { createRoot } from 'react-dom/client'
import { FiltersProvider } from "./context/Filters.jsx";
import { App } from './App';
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
