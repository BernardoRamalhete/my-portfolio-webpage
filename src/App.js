import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import HomePage from './pages/HomePage'
import ThankYou from './pages/ThankYou'
import Projects from './pages/Projects'
import About from './pages/About'
import './styles/main.css'
function App() {
  const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        if(!darkMode) {
          document.body.classList.add('white')
          
        } else {
          document.body.classList.remove('white')
        }
      },[darkMode])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}/>
        <Route path='/thanks' element={<ThankYou/>}/>
        <Route path='/projects' element={<Projects darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
        <Route path='/about' element={<About darkMode={darkMode} setDarkMode={setDarkMode}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
