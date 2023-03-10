import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId="492574664693-hbgb9aqqh3cr8gq8f8b9f6uui6497qqd.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
)
