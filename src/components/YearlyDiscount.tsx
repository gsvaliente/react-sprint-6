import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function YearlyDiscount() {
  const { handleYearlyDiscountCheck, isDiscountChecked } =
    useContext(AppContext) || {};
  return (
    <div className='flex items-center justify-center text-center align-middle mt-7'>
      <div className='form-control'>
        <label className='label cursor-pointer space-x-3'>
          <span
            className={`label-text ${
              !isDiscountChecked ? 'font-bold text-orange-400' : ''
            }`}
          >
            Monthly Payments
          </span>
          <input
            type='checkbox'
            id='discount'
            className='mr-2 toggle'
            onChange={handleYearlyDiscountCheck}
            checked={isDiscountChecked}
          />
          <span
            className={`label-text ${
              isDiscountChecked ? 'font-bold text-orange-400' : ''
            }`}
          >
            Yearly Payments
          </span>
        </label>
      </div>
    </div>
  );
}
