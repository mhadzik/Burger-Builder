

import React from 'react'
import './Toolbar.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import HamburgerMenu from '../NavigationItems/HamburgerMenu/HamburgerMenu'

const toolbar = (props) => (
    <header className="Toolbar">
        <div className="ToolbarLogo">
            <HamburgerMenu opened={props.opened} />
        </div>
        <div className="ToolbarLogo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>


)
export default toolbar;