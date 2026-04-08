import React from "react"
import animationsData from '../animations.json';

export function DyvixToastItem({Class, message, animation, onClose})
{
    const [status, SetStatus] = React.useState("entering");






    return (
        <div className={Class}>
            {message}
        </div>
    )
}