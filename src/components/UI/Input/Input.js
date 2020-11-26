

import React from 'react'
import './Input.scss'

const input = (props) => {
    let inputElement = null
    const inputClasses = ["InputElement"]

    if (props.invalid && props.shouldValidate && props.touched.true) {
        inputClasses.push('InputInvalid');
    }

    switch (props.inputtype) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}
                onChange={props.changed} />
    }

    let validationError = null;
    if (props.value.length === 0 && props.touched) {
        validationError = <p className="ValidationError">This field must not be empty.</p>
    } else if (props.invalid && props.touched) {
        validationError = <p className="ValidationError">Please enter a valid value.</p>
        console.log(props.shouldValidate);
    }


    return (
        <div className="Input">
            <label className="Label"
                onChange={props.changed}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}
export default input;