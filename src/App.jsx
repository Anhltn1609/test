
import './App.scss'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Content from './pages/Content'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='/' element={<Content/>}></Route>
          <Route path='*' element={<div style={{textAlign:'center',fontSize:'3rem',lineHeight:'1', margin:'100px 100px', color:'red' }}>404 not found</div>}></Route>
        </Route>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
