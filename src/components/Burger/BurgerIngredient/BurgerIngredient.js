import React from 'react';
import './BurgerIngredient.scss';
import './BurgerIngredient.scss';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className="BreadBottom"></div>;
            break;

        case ('break-top'):
            ingredient = (
                <div className="BreatTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
            )
            break;

        case ('meat'):
            ingredient = <div className="Meat"></div>
            break;

        case ('cheese'):
            ingredient = <div className="Cheese"></div>
            break;

        case ('bacon'):
            ingredient = <div className="bacon"></div>
            break;
        
        case ('salad'):
            ingredient = <div className="salad"></div>
            break;
            
        default:
            ingredient = null;
    }


};


export default burgerIngredient;