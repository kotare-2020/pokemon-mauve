import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const ResultsButton = () => {
    return (
        <React.Fragment>
            <button type="button" className="resultsButton"><Link to="/results">Results</Link></button>
        </React.Fragment>
    )
}

export default ResultsButton