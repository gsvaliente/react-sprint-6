import { AddingBudget } from '../components/AddingBudget';
import { BudgetCard } from '../components/BudgetCard';
import { CardList } from '../components/CardList';
import { Total } from '../components/Total';
import { Divider } from '../components/ui/Divider';
import { Header } from '../components/ui/Header';

function App() {
  return (
    <div className='bg-stone-100'>
      <Header />

      <CardList />
      <Total />
      <Divider />
      <AddingBudget />
      <BudgetCard />
    </div>
  );
}

export default App;
