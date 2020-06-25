import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const StartBattle = () => {
    return (
        <React.Fragment>
            <button type="button" className="startBattle"><Link to="/arena">START BATTLE</Link></button>
        </React.Fragment>
    )
}

export default StartBattle