import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './image.css'

const ImageCards = ({ image }) => {
    return (
        <div className='card'>
            <img
                src={image.imageUrl}
                alt=""
            />

            <h1>{image.name}</h1>

            <p>
                {image.description}
            </p>

            <div className="card-info">
                <p>
                    <FontAwesomeIcon icon={faUser} style={{ color: "rgb(116, 192, 252)" }} />
                    <span>{image.author}</span>
                </p>

                <p>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ color: "rgb(116, 192, 252)", }} />
                    <span>{image.date}</span>
                </p>
            </div>
        </div>
    );
};

export default ImageCards;