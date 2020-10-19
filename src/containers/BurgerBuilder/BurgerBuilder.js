import axios from '../../axios-orders'
import Burger from '../../components/Burger/Burger'
import React from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../withErrorHandler/withErrorHandler'


const { Component } = require("react");

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.4,
    bacon: 1
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 1,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        axios.get('https://burger-builder-aff3e.firebaseio.com/ingredients.json')
            .then( response => {
                this.setState({ingredients: response.data})
            }  )
            .catch(error => {
                this.setState({ error: true })
            })
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true })
        const orderData = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),
            customer: {
                name: 'Kipi',
                address: {
                    street: 'ulica 2',
                    zipCode: '41-250',
                    country: 'Poland'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'uberEats'
        }
        axios.post('/orders.json', orderData)
            .then( response => {
                this.setState({ loading: false, purchasing: false })
            })
            .catch( error => {
                this.setState({ loading: false, purchasing: false })
            })
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 
        }
        let orderSummary = null 
        let burger = this.state.error ? <h2 style={{textAlign: 'center'}}>Ingredients can't be loaded</h2> : <Spinner />

        if (this.state.ingredients) {
            burger = (
                <React.Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler} />
                </React.Fragment>);
            
            orderSummary = <OrderSummary 
                            ingredients={this.state.ingredients}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinue={this.purchaseContinueHandler}
                            price={this.state.totalPrice} />

        }

        if (this.state.loading) {
            orderSummary = <Spinner />

        }

        return (
            <React.Fragment>
                <Modal 
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);