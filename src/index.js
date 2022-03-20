import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Portal from './components/Portal/Portal'
import CreateTour from './components/Createtour/CreateTour'
import Login from './components/LoginRegister/Login/Login'
import Searching from './components/Searching/Searching'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path={'/balo/newjourney'} element={<CreateTour />} />
          <Route exact path="/balo" element={<Portal />}></Route>
          <Route exact path="/balo/login" element={<Login />}></Route>
          <Route exact path="/balo/postfilterform" element={<PostFilterForm />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
