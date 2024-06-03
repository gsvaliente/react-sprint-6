import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold mb-5'>Welcome to the Budget App</h1>
          <Link
            to={'/budget'}
            className='btn btn-primary'
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}
