import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ThankYou from './pages/ThankYou'
import Projects from './pages/Projects'
import About from './pages/About'
import './styles/main.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/thanks' element={<ThankYou/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
