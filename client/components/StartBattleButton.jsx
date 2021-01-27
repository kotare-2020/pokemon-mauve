import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


const StartBattleButton = () => {
    return (
        <React.Fragment>
            <button type="button" className="startBattleButton"><Link to="/arena">START BATTLE</Link></button>
        </React.Fragment>
    )
}

export default StartBattleButton
