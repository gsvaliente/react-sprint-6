import { Link } from 'react-router-dom';
import { AddingBudget } from '../components/AddingBudget';
import { BudgetCard } from '../components/BudgetCard';
import { CardList } from '../components/CardList';
import { Total } from '../components/Total';

function App() {
  return (
    <>
      <header>This will be the header</header>
      <Link
        className='btn'
        to={'/'}
      >
        Home
      </Link>
      <CardList />
      <Total />
      <AddingBudget />
      <BudgetCard />
    </>
  );
}

export default App;
