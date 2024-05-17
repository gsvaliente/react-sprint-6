import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card } from './Card';

export function CardList() {
  const { DATA } = useContext(AppContext) || { DATA: [] };

  return (
    <ul>
      {DATA.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  );
}
