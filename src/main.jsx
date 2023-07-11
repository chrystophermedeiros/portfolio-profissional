import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './assets/containers/Home'
import GlobalStyle from './assets/style/globalStyles'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyle />
  </React.StrictMode>,
)
