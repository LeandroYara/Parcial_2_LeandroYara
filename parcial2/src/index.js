import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {IntlProvider} from 'react-intl';
import localeEnMessages from './locales/en.json';
import localeEsMessages from './locales/es.json';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

const messages = {
  'en': localeEnMessages,
  'es': localeEsMessages
};

const language = navigator.language.split(/[-_]/)[0];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={navigator.language} messages={messages[language]}>
      <App />    
    </IntlProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
