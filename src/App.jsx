
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import CourseList from './Pages/Course/CourseList'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'

function App() {
 

  return (
   <>
     <Routes>
       <Route path='/' element={<HomePage />}></Route>
       <Route path='/about' element={<AboutUs />}></Route>
       <Route path='/courses' element={<CourseList />}></Route>
       <Route path='/contact' element={<Contact />}></Route>
       <Route path='/denied' element={<Denied />} ></Route>
       <Route path='/signup' element={<Signup />} />
       <Route path='/login' element={<Login />} />
       <Route path='*' element={<NotFound />}></Route>
     </Routes>
    
   </>
  )
}

export default App
