import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';

export function CardList() {
  const { DATA, isDiscountChecked } = useContext(AppContext) || { DATA: [] };

  return (
    <ul className='pt-5'>
      {DATA.map((item) => (
        <Card
          key={item.id}
          item={isDiscountChecked ? { ...item, price: item.price * 0.8 } : item}
        />
      ))}
    </ul>
  );
}
