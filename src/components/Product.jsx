import React from 'react';
import style from '../css/Product.module.css'

const Product = ({title, description, price, rating, img}) => {
    return (
        <div className={style.Product}>
            <p>{title}</p>
            <div className={style.detailsProduct}>
                <div className={style.imgPrice}>
                    <img src={img} alt={title} />
                    <p className={style.price}>Price: {price} $</p>
                </div>
                <div className={style.descriptionRating}>
                    <p>{description}</p>
                    <p className={style.rating}>Rating: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
