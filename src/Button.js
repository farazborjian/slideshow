import React from 'react'

const Button = ({onClick1, onClick2}) => {
    return (
        <div className="btn">
        <button onClick={onClick1}>Previous</button>
        <button onClick={onClick2}>Next</button>
        </div>
    )
}

export default Button
