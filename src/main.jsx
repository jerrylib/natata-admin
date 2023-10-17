import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HashRouter,
} from "react-router-dom";
import App from './App'

// === Styles === //
import './index.css'

// === Config === //
import { axiosInterceptorsUsed } from '@/config/axios'

axiosInterceptorsUsed()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
