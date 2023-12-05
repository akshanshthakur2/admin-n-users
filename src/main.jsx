import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Context from './Context.jsx';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>,
)
