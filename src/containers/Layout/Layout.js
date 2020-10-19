import React, { Component } from 'react';
import './Layout.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }})
    }


    render() {
        return (
        <React.Fragment>
            <Toolbar opened={this.sideDrawerOpenedHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
            <main className="Content">
                {this.props.children}
            </main>
        </React.Fragment>    

        )
    }
    
};

export default Layout;