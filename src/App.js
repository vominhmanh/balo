import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import CreateJourney from './components/CreateJourney/CreateJourney'
import Portal from './components/Portal/Portal'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './components/LoginRegister/Login/Login'
import Logout from './components/LoginRegister/Login/Logout'
import QrIndex from './components/QrLock/QrIndex'
import { useDispatch } from 'react-redux'
import loginApi from './api/loginApi'
import { userLogSlice } from './redux/User/userLogSlice'
import Register from './components/LoginRegister/Login/Register';
import KeyListIndex from './components/KeyList/KeyListIndex';
import AddNewLock from './components/KeyList/AddNewLock';
import LockInfomation from './components/KeyList/Infomation/LockInfomation';

function App() {
  const dispatch = useDispatch()
  const cookies = new Cookies()
  useEffect(async () => {
    try {
      const access_token = cookies.get('access_token')
      const response = await loginApi.getUser(access_token)

      dispatch(
        userLogSlice.actions.login({
          access_token: access_token,
          user: response.data,
        }),
      )
    } catch (e) {
      cookies.remove('access_token')
    }
  },[])

  return (
    <div className="container-fluid p-0">
      <div className="App">
        <Navbar />
          <Routes>
            <Route path={'/newjourney'} element={<CreateJourney />} />
            <Route exact path="/" element={<KeyListIndex />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/qrlock" element={<QrIndex />}></Route>
            <Route exact path="/keylist" element={<KeyListIndex />} ></Route>
            <Route exact path="/lockinfo/:lockQrCode" element={<LockInfomation />} ></Route>
            <Route exact path="/keylist/addnewlock" element={<AddNewLock />}></Route>
            <Route
              exact
              path="/get-lock/:paramLockCode"
              element={<QrIndex accessedByLink={true}/>}
            ></Route>
          </Routes>
      </div>
    </div>
  )
}

export default App
