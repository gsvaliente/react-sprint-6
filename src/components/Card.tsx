import { useState } from 'react';
import { DataType } from '../data/data';

interface CardProps {
  item: DataType;
  onBudgetChange(title: string, price: number): void;
  onResetExtras(title: string): void;
}

const INITIAL_EXTRAS = {
  pages: 0,
  languages: 0,
};

export function Card({ item, onBudgetChange, onResetExtras }: CardProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [extras, setExtras] = useState<{ pages: number; languages: number }>(
    INITIAL_EXTRAS
  );

  const resetExtras = () => {
    onResetExtras(item.title);
    setExtras({ pages: 0, languages: 0 });
  };

  const handleChangeChecked = () => {
    setIsChecked((curr) => !curr);
    if (!isChecked) {
      onBudgetChange(item.title, item.price);
    } else {
      resetExtras();
    }
  };

  const handleIncreaseExtras = (field: 'pages' | 'languages') => {
    setExtras((curr) => {
      if (curr[field] >= 3) return curr;
      const newValue = curr[field] + 1;
      onBudgetChange(field, newValue * 30);
      return { ...curr, [field]: newValue };
    });
  };

  const handleDecreaseExtras = (field: 'pages' | 'languages') => {
    setExtras((curr) => {
      if (curr[field] <= 0) return curr;
      const newValue = curr[field] - 1;
      onBudgetChange(field, newValue * 30);
      return { ...curr, [field]: newValue };
    });
  };

  return (
    <li>
      {item.title}, {item.price}
      <input
        type='checkbox'
        readOnly
        checked={isChecked}
        onChange={handleChangeChecked}
      />
      {isChecked && item.title === 'web' && (
        <>
          <div>
            <label>Pages</label>
            <button onClick={() => handleDecreaseExtras('pages')}>-</button>
            <input
              type='number'
              readOnly
              value={extras.pages}
            />
            <button onClick={() => handleIncreaseExtras('pages')}>+</button>
          </div>

          <div>
            <label>Languages</label>
            <button onClick={() => handleDecreaseExtras('languages')}>-</button>
            <input
              type='number'
              readOnly
              value={extras.languages}
            />
            <button onClick={() => handleIncreaseExtras('languages')}>+</button>
          </div>
        </>
      )}
    </li>
  );
}
