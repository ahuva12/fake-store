import React from 'react';

const Product = ({title, description, price, rating, img}) => {
    return (
        <>
            <p>{title}</p>
            <img src={img} alt={title} />
            <p>{price}</p>
            <p>{description}</p>
            <p>{rating}</p>
        </>
    );
};

export default Product;
