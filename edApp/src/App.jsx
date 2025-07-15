import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Form } from './pages/Form'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/form" element={<Form />}/>
      </Routes>
    </Router>
  )
  
}

export default App
