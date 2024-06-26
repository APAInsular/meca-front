import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { TranslationProvider } from './context/TranslationContext.jsx';
import { AxiosBaseUrlProvider } from './context/AxiosBaseUrl.jsx';
import { UserPointsProvider } from './context/UserPointsContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AxiosBaseUrlProvider baseUrl={"https://acoray.informaticamajada.es/api"}>
      <UserPointsProvider>
        <TranslationProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </TranslationProvider>
      </UserPointsProvider>
    </AxiosBaseUrlProvider>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
