import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AddingBudget } from '../components/AddingBudget';
import { BudgetCard } from '../components/BudgetCard';
import { CardList } from '../components/CardList';
import { AppContext } from '../context/AppContext';

function App() {
  // console.log(budget);
  const { total } = useContext(AppContext) || { total: 0 };

  return (
    <>
      <header>This will be the header</header>
      <CardList />
      <p>The total will be ${total}</p>

      <Link
        className='btn'
        to={'/'}
      >
        Home
      </Link>
      <AddingBudget />
      <BudgetCard />
    </>
  );
}

export default App;
