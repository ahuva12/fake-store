import React from 'react';

const Product = ({name, price, img}) => {
    return (
        <>
            <p>{name}</p>
            <img src={img} alt={name} />
            <p>{price}</p>
        </>
    );
};

export default Product;