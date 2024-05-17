import { DataType } from '../data/data';
import { Card } from './Card';

interface CardListProps {
  data: DataType[];
  onBudgetChange(title: string, price: number): void;
  onResetExtras(title: string): void;
}

export function CardList({
  data,
  onBudgetChange,
  onResetExtras,
}: CardListProps) {
  return (
    <ul>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          onBudgetChange={onBudgetChange}
          onResetExtras={onResetExtras}
        />
      ))}
    </ul>
  );
}
