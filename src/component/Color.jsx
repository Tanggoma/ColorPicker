import React from 'react'

const Color = ({ color, selectedColor, setSelectedColor }) => {
    return (
        <div>
            {selectedColor === color ?
                (
                    <div
                        onClick={() => setSelectedColor(color)}
                        className={`${color} selected`}>
                    </div>
                ) :

                (<div
                    onClick={() => setSelectedColor(color)}
                    className={color}>
                </div>)
            }</div>
    )
}

export default Color