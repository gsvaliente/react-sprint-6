import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export function Filters() {
  const {
    handleNameFilter,
    handleResetFilters,
    handleDateFilter,
    handleSearchBar,
  } = useContext(AppContext) || {};

  return (
    <div className='flex text-center align-middle justify-center mt-10'>
      <div className='join join-vertical lg:join-horizontal'>
        <input
          className='input input-bordered join-item'
          placeholder='Search by name'
          onChange={(e) => handleSearchBar && handleSearchBar(e.target.value)}
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
