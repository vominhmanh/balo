import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import CreateJourney from './components/CreateJourney/CreateJourney'
import Portal from './components/Portal/Portal'
import Login from './components/LoginRegister/Login/Login'
import Logout from './components/LoginRegister/Login/Logout'
import QrIndex from './components/QrLock/QrIndex'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
