import React from 'react';
import style from '../css/Category.module.css';

const Category = ({nameCategory, img}) => {
    return (
        <div className={style.Category}>
            <img src={img} alt={nameCategory} />
        </div>
    );
};

export default Category;