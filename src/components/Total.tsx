import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function Total() {
  const { total } = useContext(AppContext) || { total: 0 };
  return (
    <div className='flex justify-end md:mr-5'>
      <div className='stats shadow bg-slate-200'>
        <div className='stat flex'>
          <div className='stat-title self-center'>Total Price</div>
          <div className='stat-value'>€ {total}</div>
        </div>
      </div>
    </div>
  );
}
