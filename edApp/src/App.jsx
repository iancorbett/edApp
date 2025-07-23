import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import { HomePage } from './pages/HomePage'
import { About } from './components/About'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'

function App() {

  return (
    
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    
  )
  
}

export default App
