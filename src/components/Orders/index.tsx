import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';


export function Order() {
  return (
    <>
      <Container>
        <OrdersBoard />
        <OrdersBoard />
        <OrdersBoard />
      </Container>
    </>
  );
}
