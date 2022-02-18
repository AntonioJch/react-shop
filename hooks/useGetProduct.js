import {useEffect, useState} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios (API);
        setProducts(response.data);
    }, []);
    return products;
};

export default useGetProducts;

/* Podemos empleaar otra forma de traer datos de una Api>

// con 'Fetch(nativa)..

 function useGetProducts(API) {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API)
            .then((res) => 
            res.json())
            .then((response) => {
                setProducts(response);
                setIsLoading(false);
            });
    }, []);
    return {products, isLoading};
}

export default useGetProducts;*/