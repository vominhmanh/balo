import logo from './logo.svg'
import './App.css'
import CreateTour from './components/Createtour/CreateTour'
import 'bootstrap/dist/css/bootstrap.min.css'
import Portal from './components/Portal/Portal'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/navbar'
function App() {
  return (
    <div className="container-fluid p-0">
      <div className="App">
        <Navbar />
      </div>
    </div>
  )
}

export default App
