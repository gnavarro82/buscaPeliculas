import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from "./context/DataContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*con esto hacemos que todos los hijos conoscan el componten y los datos 
    que se comparte en el dataprovider   */}
    <DataProvider>
    <App />
    </DataProvider>
  </React.StrictMode>,
)
