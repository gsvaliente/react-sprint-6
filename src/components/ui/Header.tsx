import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <div className='pl-5 font-extrabold text-xl underline'>BudgetApp</div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <Link
            className='btn btn-ghost font-bold'
            to={'/'}
          >
            HOME
          </Link>
        </ul>
      </div>
    </div>
  );
}
