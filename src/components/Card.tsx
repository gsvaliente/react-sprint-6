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
    <div className='flex flex-col w-full border-opacity-50 mt-2'>
      <div className='grid h-20 card bg-base-300 rounded-box'>
        <div className='flex flex-row justify-around'>
          <div className=''>
            <h1 className='font-bold'>{item.title}</h1>
            <p className='text-sm'>{item.description}</p>
          </div>
          <div className='font-extrabold'>{item.price}</div>
          <div className='form-control'>
            <label className='label cursor-pointer'>
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
          {isChecked && item.title === 'web' && (
            <>
              <div>
                <label>Pages</label>
                <button
                  className='btn btn-circle btn-outline'
                  onClick={() => handleDecreaseExtras('pages')}
                >
                  -
                </button>
                <input
                  type='number'
                  readOnly
                  value={extras.pages}
                />
                <button
                  className='btn btn-circle btn-outline'
                  onClick={() => handleIncreaseExtras('pages')}
                >
                  +
                </button>
                <Modal
                  info='This allows the team to create multiple pages to the desired website, we can create upto 3 new pages'
                  title='Pages Help'
                  id={1}
                >
                  ?
                </Modal>
              </div>

              <div>
                <label>Languages</label>
                <button
                  className='btn btn-circle btn-outline'
                  onClick={() => handleDecreaseExtras('languages')}
                >
                  -
                </button>
                <input
                  type='number'
                  readOnly
                  value={extras.languages}
                />
                <button
                  className='btn btn-circle btn-outline'
                  onClick={() => handleIncreaseExtras('languages')}
                >
                  +
                </button>
                <Modal
                  info='When the team creates a website, we also are able to add multiple languages. You can select upto 3 new languages'
                  title='Language Help'
                  id={2}
                >
                  ?
                </Modal>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
