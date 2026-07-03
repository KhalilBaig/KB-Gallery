import React from 'react'
import ImageCards from './imageCards'
import './image.css'
const Images = ({ images }) => {
    return (
        <div className='cards-container '>
            {images.map((element) => {
                return <ImageCards image={element} />
            })}

        </div>
    )
}

export default Images