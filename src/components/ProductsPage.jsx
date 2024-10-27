import React, { useEffect, useState } from 'react';
import { getRelevantProducts } from '../service/logic.js';
import Product from './Product.jsx';

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
        <>
            <h2>{categoryPruducts}</h2>
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
        </>
    );
};

export default ProductsPage;
