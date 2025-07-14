import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { form } from './pages/form'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={HomePage}/>
      </Routes>
    </Router>
  )
  
}

export default App
