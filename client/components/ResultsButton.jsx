import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const ResultsButton = () => {
    return (
        <React.Fragment>
            <button type="button" className="resultsbutton"><Link to="/results">RESULTS</Link></button>
        </React.Fragment>
    )
}

export default ResultsButton