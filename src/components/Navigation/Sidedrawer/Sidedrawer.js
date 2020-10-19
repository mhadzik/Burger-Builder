import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];

    if(props.open){
        attachedClasses = ["SideDrawer", "Open"]
    }

    return (
        <React.Fragment>
            <Backdrop clicked={props.closed} show={props.open} />
            <div className={attachedClasses.join(' ')}>
                <div className="SideDrawerLogo">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}
export default sideDrawer;