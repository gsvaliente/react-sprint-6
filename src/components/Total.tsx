import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function Total() {
  const { total } = useContext(AppContext) || { total: 0 };
  return (
    <div>
      <div className='stats shadow'>
        <div className='stat'>
          <div className='stat-title'>Total Price</div>
          <div className='stat-value'>€ {total}</div>
        </div>
      </div>
    </div>
  );
}
