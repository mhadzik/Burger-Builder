
import React from 'react';
const { Component } = require("react");


class BurgerBuilder extends Component {
    render () {
        return (
            <React.Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;