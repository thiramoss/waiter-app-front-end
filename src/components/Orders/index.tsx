import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = 
  [
    {
      '_id': '63aa2ebae235d3f5e463ce36',
      'table': '123',
      'status': 'IN_PRODUCTION',
      'products': [
        {
          'product': {
            'name': 'Pizza quatro queijos',
            'imagePath': '1672086627978-quatro-queijos.png',
            'price': 40,
          },
          'quantity': 3,
          '_id': '63aa2ebae235d3f5e463ce37'
        },
        {
          'product': {
            'name': 'coca cola',
            'imagePath': '1672091379523-coca-cola.png',
            'price': 7
          },
          'quantity': 2,
          '_id': '63aa2ebae235d3f5e463ce38'
        }
      ],
    }
  ];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👩‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
