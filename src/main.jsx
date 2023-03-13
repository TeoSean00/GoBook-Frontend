import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="492574664693-hbgb9aqqh3cr8gq8f8b9f6uui6497qqd.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
