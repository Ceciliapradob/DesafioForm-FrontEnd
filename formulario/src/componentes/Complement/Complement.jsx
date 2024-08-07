import React from 'react'
import './Complement.css'

/**
 * 
 * Return a field input with label, input and error message
 * 
 */
function Value({name, label, errorMessage, ...inputProps}) {
    return (
        <div>
            <Label name={name}>{label}</Label>
            <Input
                name={name}
                {...inputProps}
            />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
    )
}

/**
 * 
 * Return date inputs with 2 fields (month and year), 1 label and 1 error message
 * 
 */
function DateInputs({inputs, onChange, value, errorMsgMonth, errorMsgYear}) {

    const label = inputs.dateInputs.label
    const name = inputs.dateInputs.inputs[0].name

    return (
        <div className='date-fields'>
            <Label name={name}>{label}</Label>
            <div className='date-inputs'>
                {inputs.dateInputs.inputs.map(input => {
                    return <Input
                        key={input.name}
                        onChange={onChange}
                        value={value[input.name]}
                        {...input}
                    />
                })}
            </div>
            <ErrorMessage>{errorMsgMonth || errorMsgYear}</ErrorMessage>
        </div>
    )
}


/**
 * 
 * Label linked to an input
 * 
 */
function Label({name, children}) {
    return <label htmlFor={name}>{children}</label>
}

/**
 * 
 * A simply input
 * Give every parameters you want through const INPUTS in src/const.jsx
 * 
 */
function Input({name, onChange, value, ...inputProps}) {
    return (
        <input
            id={name}
            name={name}
            onChange={onChange} 
            value={value}
            {...inputProps}
        />
    )
}

/**
 * 
 * Return a colored error message
 * 
 */
function ErrorMessage({children}) {
    return <span className='error-msg'>{children}</span>
}

export {Value, DateInputs}
