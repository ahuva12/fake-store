
export const getAllProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await res.json();
        return json; 
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; 
    }
};

export const getRelevantProducts = async (category) => {
    try {
        const products = await getAllProducts(); 
        const relevantProducts = products.filter(prod => prod.category === category); 
        console.log(relevantProducts);
        return relevantProducts; // Return the relevant products
    } catch (error) {
        console.error('Error fetching relevant products:', error);
        return []; 
    }
};
