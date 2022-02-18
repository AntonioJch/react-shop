import React from 'react';
import ProductItem from '../components/ProducItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);
    return (
        <section className="main-container">
        <div className="ProductList">
            {products.map(product => ( 
                < ProductItem  product={product} key={product.id}/>
//a la hora de iterar con una API en React empleamos un metodo "key" el cual nos permite 
//identificar que elemento del 'virtual DOM' se esta creando de forma dinamica.
//'product' es una arreglo que  expresa el metodo '.map' el cual itera con el arreglo 
//que almacena la data de la API requerida.

            ))}  
        </div>
      </section>
    );
}

export default ProductList;