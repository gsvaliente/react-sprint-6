import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { DataType } from '../data/data';
import { Modal } from './Modal';

interface CardProps {
  item: DataType;
}

const INITIAL_EXTRAS = {
  pages: 0,
  languages: 0,
};

export function Card({ item }: CardProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [extras, setExtras] = useState<{ pages: number; languages: number }>(
    INITIAL_EXTRAS
  );

  const { handleBudgetChange, handleResetExtras } =
    useContext(AppContext) || {};

  const resetExtras = () => {
    handleResetExtras?.(item.title);
    setExtras({ pages: 0, languages: 0 });
  };

  const handleChangeChecked = () => {
    setIsChecked((curr) => !curr);
    if (!isChecked) {
      handleBudgetChange?.(item.title, item.price);
    } else {
      resetExtras();
    }
  };

  // const handleIncreaseExtras = (field: 'pages' | 'languages') => {
  //   setExtras((curr) => {
  //     if (curr[field] >= 3) return curr;
  //     const newValue = curr[field] + 1;
  //     handleBudgetChange?.(field, newValue * 30);
  //     return { ...curr, [field]: newValue };
  //   });
  // };

  // const handleDecreaseExtras = (field: 'pages' | 'languages') => {
  //   setExtras((curr) => {
  //     if (curr[field] <= 0) return curr;
  //     const newValue = curr[field] - 1;
  //     handleBudgetChange?.(field, newValue * 30);
  //     return { ...curr, [field]: newValue };
  //   });
  // };

  //THIS WAY DOES NOT MAKE THE COMPONENT NOT UPDATE IN THE RENDER PHASE
  const handleIncreaseExtras = (field: 'pages' | 'languages') => {
    setExtras((curr) => {
      if (curr[field] >= 3) return curr;
      const newValue = curr[field] + 1;
      return { ...curr, [field]: newValue };
    });
  };

  const handleDecreaseExtras = (field: 'pages' | 'languages') => {
    setExtras((curr) => {
      if (curr[field] <= 0) return curr;
      const newValue = curr[field] - 1;
      return { ...curr, [field]: newValue };
    });
  };

  useEffect(() => {
    handleBudgetChange?.('pages', extras.pages * 30);
    handleBudgetChange?.('languages', extras.languages * 30);
  }, [extras, handleBudgetChange]);

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
            <Modal
              info='This allows the team to create multiple pages to the desired website, we can create upto 3 new pages'
              title='Pages Help'
            >
              ?
            </Modal>
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
            <Modal
              info='When the team creates a website, we also are able to add multiple languages. You can select upto 3 new languages'
              title='Language Help'
            >
              ?
            </Modal>
          </div>
        </>
      )}
    </li>
  );
}
