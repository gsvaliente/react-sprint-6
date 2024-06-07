import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function Filters() {
  const { handleNameFilter, handleResetFilters, handleDateFilter } =
    useContext(AppContext) || {};

  return (
    <div className='flex text-center align-middle justify-center mt-10'>
      <div className='join'>
        <input
          className='input input-bordered join-item'
          placeholder='Search by name'
        />
        <button
          className='btn btn-neutral join-item rounded-r-full'
          onClick={handleNameFilter}
        >
          Name
        </button>
        <button
          className='btn btn-neutral join-item rounded-r-full'
          onClick={handleDateFilter}
        >
          Date
        </button>
        <button
          className='btn btn-neutral join-item rounded-r-full'
          onClick={handleResetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
