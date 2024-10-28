import React, { useEffect, useState } from 'react';
import { getRelevantProducts } from '../service/logic.js';
import Product from './Product.jsx';
import style from '../css/ProductsPage.module.css'

const ProductsPage = ({ categoryPruducts }) => {
    const [productsForRender, setProductsForRender] = useState([]); 

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getRelevantProducts(categoryPruducts); 
            setProductsForRender(products); 
        };

        fetchProducts(); 
    }, [categoryPruducts]);

    return (
        <div className={style.ProductsPage}>
            {productsForRender.map(product => (
                <Product 
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    rating={product.rating.rate}
                    img={product.image}
                />
            ))}
        </div>
    );
};

export default ProductsPage;
