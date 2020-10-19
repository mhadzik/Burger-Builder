

import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        })

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <span><strong>{this.props.price.toFixed(2)}$</strong></span></p>
                <p>Continue to Checkout?</p>
                <Button
                click={this.props.purchaseCancelled}
                btnType="Danger">Cancel</Button>
                <Button
                click={this.props.purchaseContinue}
                btnType="Success">Continue</Button>
        </React.Fragment>
        )
    }
    
    
}
export default OrderSummary;