import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import { HomePage } from './pages/HomePage'
import { About } from './components/About'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  )
  
}

export default App
