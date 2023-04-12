import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ text, callback = "", to = '', size, color }) => {
    return (
        <>
            {
                to !== "" ? <Link to={to}>
                    <button onClick={callback} className={`border rounded-full px-5 py-1 ${size} ${color}`}>
                        {text}
                    </button>
                </Link> : <button onClick={callback} className={`border rounded-full px-5 py-1 ${size} ${color}`}>
                    {text}
                </button>
            }
        </>
    )
}

export default Button