//import { Order } from '../../types/Order';
import { useState } from 'react';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

 interface OrdersBoardProps {
   icon: string;
   title: string;
  // orders: Order[];
 }

export function OrdersBoard({icon, title }: OrdersBoardProps){
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal(){
    setIsModalVisible(true);
  }

  return(
    <Board>
      <OrderModal visible={isModalVisible}/>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button" onClick={handleOpenModal}>
          <strong>Mesa 1</strong>
          <span> 12 itens</span>
        </button>

        {/* <>
            {orders.map((order) => {
              console.log(order.products);
              <button type="button" key={order._id}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>;})}
          </> */}
      </OrdersContainer>    
    </Board>
  );
}
