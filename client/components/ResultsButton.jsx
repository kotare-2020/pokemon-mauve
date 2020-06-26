import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const ResultsButton = () => {
    return (
        <React.Fragment>
            <button type="button" className="resutlsbutton"><Link to="/Resutls">RESULTS</Link></button>
        </React.Fragment>
    )
}

export default ResultsButton