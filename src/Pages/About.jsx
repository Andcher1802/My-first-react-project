import  React  from 'react'
import Header from '../Components/Header/Header.component.jsx'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div>
            <Header/>
            About page
            <Link to="/">Back to homepage</Link>
        </div>
    )
}

export default About