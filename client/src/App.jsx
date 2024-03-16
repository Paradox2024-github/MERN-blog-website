import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRourte from './components/PrivateRourte'


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element= {<PrivateRourte />} >
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        
        <Route path='/projects' element={<Projects />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  )
}
