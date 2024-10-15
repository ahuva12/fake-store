import React from 'react';

const Category = ({nameCategory, img}) => {
    return (
        <>
            <h2>{nameCategory}</h2>
            <img src={img} alt={nameCategory} />
        </>
    );
};

export default Category;