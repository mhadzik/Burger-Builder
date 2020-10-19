

import React from 'react'
import './HamburgerMenu.scss'

const hamburgerMenu = (props) => (
    <div className="HamburgerMenu" onClick={props.opened}>
        <div></div>
        <div></div>
        <div></div>
    </div>

)
export default hamburgerMenu;