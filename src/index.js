import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import global_es from "./translations/es/global.json"
import global_en from "./translations/en/global.json"
// import global_de from "./translations/de/global.json"
// import global_fr from "./translations/fr/global.json"
// import global_it from "./translations/it/global.json"
// import global_pl from "./translations/pl/global.json"
// import global_jp from "./translations/jp/global.json"
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
    // de: {
    //   global: global_de
    // },
    // fr: {
    //   global: global_fr
    // },
    // it: {
    //   global: global_it
    // },
    // pl: {
    //   global: global_pl
    // },
    // jp: {
    //   global: global_jp
    // }
  }
}
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
