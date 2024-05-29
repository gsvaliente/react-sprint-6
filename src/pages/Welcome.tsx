import { Link } from 'react-router-dom';

export function Welcome() {
  return (
    <div>
      <h1>Welcome to the Budget App</h1>
      <Link to={'/budget'}>Enter</Link>
    </div>
  );
}
