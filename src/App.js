import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

// Pages
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
function App() {

  return (
    <div >
      <div className='container'>
        
        
              
              
    
            <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
              
              </Routes>
            </Router>
    

      
      
      </div>
    </div>
  )
}

export default App
