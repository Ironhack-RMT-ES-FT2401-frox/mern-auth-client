import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from './context/theme.context.jsx';
import { AuthWrapper } from './context/auth.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeWrapper>
      <AuthWrapper>
        <App />
      </AuthWrapper>
    </ThemeWrapper>
  </BrowserRouter>
)

