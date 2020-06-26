import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const Home = () => {
    return (
        <React.Fragment>
            <button type="button" className="homeButton"><Link to="/">HOME</Link></button>
        </React.Fragment>
    )
}

export default Home