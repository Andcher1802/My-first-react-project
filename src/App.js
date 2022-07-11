import Articles from "./Components/Articles/Articles.jsx"
import Header from "./Components/Header/Header.component.jsx"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import About from './About.jsx'

function App() {

  return (
    <div >
      <div className='container'>
        
        
    
        <Router>
          <Switch>

            <Route path="/" exact={true}>
              
              <Header/>
              <Articles/>

            </Route>

            <Route path="/About">

              <About/>
              
            </Route>


          </Switch>
        </Router>
    

      
      
      </div>
    </div>
  )
}

export default App
