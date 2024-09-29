import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ title, image, description }) => {
    const [isSwapped, setIsSwapped] = useState(false);

    const toggleColors = () => {
        setIsSwapped(!isSwapped);
    };

    return (
        <div className={`${styles.card} ${isSwapped ? styles.swapped : ''}`}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <button onClick={toggleColors}>Нажать</button>
        </div>
    );
};

export default Card;
