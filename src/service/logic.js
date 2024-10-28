
export const getAllProducts = async (category) => {
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
    
    if (getTimeDifference(category) >= 10000) {
        try {
            const products = await getAllProducts(category); 
            updateResponseReceivedTime(category);
            const relevantProducts = products.filter(prod => prod.category === category); 
            updateProductsInLocalStorage(category, relevantProducts)
            console.log(relevantProducts);
            return relevantProducts; // Return the relevant products
        } catch (error) {
            console.error('Error fetching relevant products:', error);
            return []; 
        }
    }
    else {
        return JSON.parse(localStorage.getItem(`${category} products`));
    }
};

const updateResponseReceivedTime = (category) => {
    const receivedTime = new Date().toUTCString();
    localStorage.setItem(`${category} responseReceivedTime`, receivedTime);
}

const getResponseReceivedTime = (category) => {
    return localStorage.getItem(`${category} responseReceivedTime`);
}

const updateProductsInLocalStorage = (category, products) => {
    localStorage.setItem(`${category} products`, JSON.stringify(products));
}

const getTimeDifference = (category) => {
    const currTime = Date.now(); 
    const lastResponseReceivedTimeStr = getResponseReceivedTime(category); 
    const lastResponseReceivedTime = lastResponseReceivedTimeStr ? Date.parse(lastResponseReceivedTimeStr) : null;
    if (lastResponseReceivedTime) {
        return currTime - lastResponseReceivedTime; 
    }

    return 10000;
}
