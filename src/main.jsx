import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './assets/style/globalStyles'
import Router from './assets/routes/routes'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle  />
  </React.StrictMode>,
)
