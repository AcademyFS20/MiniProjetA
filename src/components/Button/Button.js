import React from 'react'

function Button(props) {
    return (
        <div>
            <button type="button" 
            className=  {props.className} 
                        onClick={props.click} 
                        type={props.type} >
            {props.value}</button>
        </div>
    )
}

export default Button
