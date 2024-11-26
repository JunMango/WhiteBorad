import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from 'react-redux';
import store from './redux/store';

const clientId =
  '796118742393-95aocb5ca5e3uvsr1bd7qbj0g3oq0ve1.apps.googleusercontent.com';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </ThemeProvider>
  </Provider>
);

reportWebVitals();
