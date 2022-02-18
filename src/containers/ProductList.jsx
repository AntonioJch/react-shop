import React from 'react';
import ProductItem from '../components/ProducItem';
import useGetProducts from '../../hooks/useGetProduct';
import '../styles/ProductList.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);
    return (
        <section className="main-container">
        <div className="ProductList">
            {products.map(product => ( 
                < ProductItem  product={product} key={product.id}/>
//a la hora de iterar con una API en ract empleamos un metodo "key" el cual nos permite 
//identrificar que elemento del 'virtual DOM' se esta crando de forma dinamica.
//'product' es una iteracion que expresa el metodo '.map' el cual itera con el arreglo 
//que alamcena la data de la API requerida.

            ))}  
        </div>
      </section>
    );
}

export default ProductList;