import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { DataType } from '../data/data';
import { ExtraInputs } from './ExtraInputs';

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
    <div className='flex justify-center'>
      <div className='card sm:w-full md:w-10/12 bg-base-100 shadow-xl mb-5'>
        <div className='card-body flex flex-row justify-between'>
          {/* TITLE & DESCRIPTION */}
          <div>
            <h2 className='card-title uppercase'>{item.title}</h2>
            <p className='text-sm'>{item.description}</p>
          </div>
          {/* PRICE */}
          <div>
            <h1 className='font-extrabold text-xl w-16 md:w-64  md:text-3xl'>
              € {item.price}
            </h1>
          </div>
          {/* CHECKBOX & FORM */}
          <div>
            <div className='form-control'>
              <label className='label cursor-pointer space-x-2'>
                <input
                  type='checkbox'
                  readOnly
                  checked={isChecked}
                  onChange={handleChangeChecked}
                  className='checkbox checkbox-sm'
                />
                <span className='label-text'>Add</span>
              </label>
            </div>
          </div>
        </div>
        {/* CONDITIONAL FORM */}
        {isChecked && item.title === 'web' && (
          <ExtraInputs
            extras={extras}
            handleDecreaseExtras={handleDecreaseExtras}
            handleIncreaseExtras={handleIncreaseExtras}
          />
        )}
      </div>
    </div>
  );
}
