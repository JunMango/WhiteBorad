import React from 'react';
import { createRoot } from 'react-dom/client';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
const clientId =
  '796118742393-95aocb5ca5e3uvsr1bd7qbj0g3oq0ve1.apps.googleusercontent.com';
const root = createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// serviceWorkerRegistration.register();

reportWebVitals();
