import React, {useContext} from 'react';// con '{useContext}' brindamos la conexion con nuestro 'React.createContext({});' 
import AppContext from '../context/AppContext'; // y con todos los archivos ya conectados
import '@styles/OrderItem.scss';         
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
  const {removeFromCart} = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product);
  }
    return ( 
        
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.tittle} />
      </figure>
      <p>{product.tittle}</p>
      <p>{product.price}$</p>
      <img src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
    
    );
}
export default OrderItem;
