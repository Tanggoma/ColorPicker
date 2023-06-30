import React from 'react'

const Navbar = ({ selectedColor }) => {
    return (
        <>
            <div>Currently selected: </div>
            <div className={`${selectedColor} answer`}> {selectedColor} </div>
        </>
    )
}

export default Navbar